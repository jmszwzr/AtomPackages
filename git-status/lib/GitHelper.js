"use babel";

import {BufferedProcess} from "atom";

let execGit = (repository, args) => {
  return new Promise((resolve, reject) => {
    let command = atom.config.get("git-status.gitPath") || "git";
    let options = {
      cwd: repository.getWorkingDirectory(),
    };
    let stdout = "";
    let stderr = "";
    let exit = (code) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        atom.notifications.addError("Git Status", {
          detail: stderr,
          dismissable: true,
        });
        reject(stderr);
      }
    };
    new BufferedProcess({
      command,
      args,
      options,
      exit,
      stdout: (out) => stdout += out,
      stderr: (out) => stderr += out
    });
  });
};

let transformStatusOutputToList = (output, rootDir) => {
  let list = [];
  let statusPattern = /^([ MADRCU?!]{2})\s{1}(.*)/;
  output = output.split("\0");
  for (let i = 0; i < output.length; i++) {
    let line = output[i];
    if (!statusPattern.test(line)) {
      continue;
    }
    let [, status, path] = line.match(statusPattern);
    list.push({rootDir, path, status});
  }

  return list;
};

export let hasProjectRepositories = () => {
  return atom.project.getRepositories().reduce((prev, repo) => {
    return repo ? true: prev;
  }, false);
};

export let getStatusList = () => {
  let promise = new Promise((resolve, reject) => {
    let gitPromises = [];

    atom.project.getRepositories().forEach((repository) => {
      if (!repository) {
        return;
      }

      let gitPromise = execGit(repository, ["status", "--porcelain", "--null"])
        .then((output) => {
          return transformStatusOutputToList(output, repository.getWorkingDirectory());
        }
      );
      gitPromises.push(gitPromise);
    });

    Promise.all(gitPromises).then((values) => {
      let list = values.reduce((prev, current) => {
        return prev.concat(current);
      }, []);
      resolve(list);
    });
  });

  return promise;
};
