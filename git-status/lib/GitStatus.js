"use babel";

import GitStatusView from "./GitStatusView";
import { CompositeDisposable } from "atom";
import * as GitHelper from "./GitHelper";

export default {
  config: {
    gitPath: {
      type: "string",
      default: "git",
      description: "Where is your git?"
    }
  },

  view: null,
  panel: null,
  subscriptions: null,

  activate() {
    this.view = new GitStatusView();
    this.panel = atom.workspace.addBottomPanel({
      item: this.view.getElement(),
      visible: false
    });

    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add("atom-workspace", {
      "git-status:toggle": () => this.toggle()
    }));
  },


  deactivate() {
    this.panel.destroy();
    this.subscriptions.dispose();
    this.view.destroy();
  },

  toggle() {
    if (this.panel.isVisible()) {
      this.panel.hide();
    } else {
      if (!GitHelper.hasProjectRepositories()) {
        this.view.renderRepoNotFound();
      } else {
        GitHelper.getStatusList().then((list) => {
          if (list.length) {
            this.view.renderList(list);
          } else {
            this.view.renderEmpty();
          }
        });
      }
      this.panel.show();
    }
  }
};
