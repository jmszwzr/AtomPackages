"use babel";

import GitStatus from "../lib/GitStatus";

describe("GitStatus", () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage("git-status");
  });

  describe("when the git-status:toggle event is triggered", () => {
    it("hides and shows the panel", () => {
      expect(workspaceElement.querySelector(".git-status")).not.toExist();

      atom.commands.dispatch(workspaceElement, "git-status:toggle");
      waitsForPromise(() => {
        return activationPromise;
      });


      runs(() => {
        expect(workspaceElement.querySelector(".git-status")).toExist();
        let element = workspaceElement.querySelector(".git-status");
        expect(element).toExist();

        let panel = atom.workspace.panelForItem(element);
        expect(panel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, "git-status:toggle");
        expect(panel.isVisible()).toBe(false);
      });
    });
  });

  it("hides and shows the view", () => {
    jasmine.attachToDOM(workspaceElement);
    expect(workspaceElement.querySelector(".git-status")).not.toExist();
    atom.commands.dispatch(workspaceElement, "git-status:toggle");

    waitsForPromise(() => {
      return activationPromise;
    });

    runs(() => {
      let element = workspaceElement.querySelector(".git-status");
      expect(element).toBeVisible();
      atom.commands.dispatch(workspaceElement, "git-status:toggle");
      expect(element).not.toBeVisible();
    });
  });
});
