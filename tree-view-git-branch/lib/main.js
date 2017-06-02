'use babel';
import {CompositeDisposable} from 'atom';
import makeTreeViewGitRepository from './tree-view-git-repository.js';

/* eslint-disable vars-on-top */
export var config = {
  location: {
    description: 'Location of the items in the tree view.<br>Top: all at the top of the tree view.<br>Before: before the corresponding project directory.<br>Inside: as the first item in the corresponding project directory, this is the default.',
    type: 'string',
    default: 'inside',
    enum: [
      'top',
      'before',
      'inside',
    ],
  },
  separator: {
    description: 'Draw a separator between a project and the next branch list. Does nothing when the "location" setting is "top".',
    type: 'boolean',
    default: false,
  },
};

var disposables;

// maps repositories to their respective view
var treeViewGitRepositories = new Map();
/* eslint-enable vars-on-top */

// remove old repositories
function removeOldRepositories(currentRepositories) {
  for (let repository of treeViewGitRepositories.keys()) {
    if (currentRepositories.indexOf(repository) == -1) {
      treeViewGitRepositories.get(repository).destroy();
      treeViewGitRepositories.delete(repository);
    }
  }
}

// update tracked repositories and add new ones
function updateRepositories(currentRepositories, treeViewEl) {
  currentRepositories.forEach((repository, i) => {
    let treeViewGitRepository;

    // skip if project root isn't a git repository
    if (!repository) {
      return;
    }

    try {
      treeViewGitRepository = treeViewGitRepositories.get(repository);
      treeViewGitRepository.update(treeViewEl);
    } catch (e) {
      treeViewGitRepository = makeTreeViewGitRepository(repository, treeViewEl);
      treeViewGitRepositories.set(repository, treeViewGitRepository);
    }

    treeViewGitRepository.setSeparator(i);
  });
}

function update(treeViewEl) {
  Promise.all(
    atom.project.getDirectories().map(
      atom.project.repositoryForDirectory.bind(atom.project)
    )
  ).then(repositories => {
    removeOldRepositories(repositories);
    updateRepositories(repositories, treeViewEl);
  });
}

export function activate() {
  // resolves with the tree view package
  // object if and when it is loaded, or
  // with false if it isn't
  Promise.resolve(
    atom.packages.isPackageLoaded('tree-view') &&
    atom.packages.activatePackage('tree-view')
  ).then(treeViewPkg => {
    var treeViewEl = atom.views.getView(treeViewPkg.mainModule.createView());

    // do nothing if the tree view packages isn't loaded
    if (!treeViewPkg) {
      atom.notifications.addError('tree-view package not loaded', {
        detail: 'tree-view-git-branch requires the tree view package to be loaded',
      });
      return;
    }

    disposables = new CompositeDisposable(
      atom.project.onDidChangePaths(() =>
        update(treeViewEl)
      ),

      atom.commands.add('atom-workspace', 'tree-view-git-branch:reload', () =>
        update(treeViewEl)
      ),

      atom.config.onDidChange('tree-view-git-branch.location', () =>
        update(treeViewEl)
      ),

      atom.config.onDidChange('tree-view-git-branch.separator', () =>
        update(treeViewEl)
      )
    );

    update(treeViewEl);
  }).catch(error =>
    console.error(error.message, error.stack)
  );
}

export function deactivate() {
  disposables.dispose();
  disposables = null;
}
