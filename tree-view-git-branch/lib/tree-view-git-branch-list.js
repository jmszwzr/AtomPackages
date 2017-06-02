'use babel';
import 'object-assign-shim';
import 'array.from';
import {CompositeDisposable} from 'atom';
import makeTreeViewGitBranch from './tree-view-git-branch.js';
import {addEventListener} from './utils.js';

document.registerElement('tree-view-git-branch-list', {
  extends: 'li',
  prototype: Object.assign(Object.create(HTMLElement.prototype), {
    createdCallback() {
      this.classList.add('list-nested-item', 'entry', 'directory');

      this.header = this.appendChild(document.createElement('div'));
      this.header.classList.add('header', 'list-item');

      this.label = this.header.appendChild(document.createElement('span'));
      this.label.classList.add('name', 'icon');

      this.entriesByReference = {};
      this.entries = this.appendChild(document.createElement('ol'));
      this.entries.classList.add('list-tree', 'entries');
      this.collapse();

      this.disposables = new CompositeDisposable(
        addEventListener(this.header, 'click', () =>
          this.toggleExpansion()
        )
      );
    },

    initialize({icon, title, repository, entries}) {
      this.repository = repository;
      this.setIcon(icon);
      this.setTitle(title);
      this.setEntries(entries);
    },

    destroy() {
      this.remove();
      this.disposables.dispose();
      [this.disposables, this.repository] = [];
    },

    setIcon(icon) {
      if (!icon) {
        return;
      }
      this.label.className.replace(/\bicon-[^\s]+/, '');
      this.label.classList.add(`icon-${icon}`);
    },

    setTitle(title) {
      this.title = title;
      this.label.innerHTML = title;
    },

    setEntries(references = []) {
      for (let child of Array.from(this.entries.children)) {
        child.destroy();
      }

      this.entries.innerHTML = '';
      for (let ref of references) {
        this.entries.appendChild(makeTreeViewGitBranch({
          repository: this.repository,
          ref,
        }));
      }
    },

    expand() {
      if (!this.collapsed) {
        return;
      }
      this.collapsed = false;
      this.classList.add('expanded');
      this.classList.remove('collapsed');

      this.entries.style.display = '';
    },

    collapse() {
      if (this.collapsed) {
        return;
      }
      this.collapsed = true;
      this.classList.remove('expanded');
      this.classList.add('collapsed');

      this.entries.style.display = 'none';
    },

    toggleExpansion() {
      if (this.collapsed) {
        this.expand();
      } else {
        this.collapse();
      }
    },

    getPath() {
      return `${this.repository.getPath().replace('/.git', '')}:git-branches`;
    },

    isPathEqual(path) {
      return path == this.getPath();
    },
  }),
});

export default function makeTreeViewGitBranchList(...args) {
  var obj = document.createElement('li', 'tree-view-git-branch-list');
  if (args.length) {
    obj.initialize(...args);
  }
  return obj;
}
