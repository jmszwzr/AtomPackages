"use babel";

export default class GitStatusView {
  constructor(project) {
    this.element = document.createElement("div");
    this.element.id = "package-git-status";
    this.element.tabIndex = -1;
  }

  serialize() {}

  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  empty () {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }

  renderRepoNotFound () {
    this.empty();

    let notFoundNode = document.createElement("div");
    notFoundNode.classList.add("git-status-empty");
    notFoundNode.textContent = "couldn't found any repository in current project";
    this.element.appendChild(notFoundNode);
  }

  renderEmpty () {
    this.empty();

    let emptyNode = document.createElement("div");
    emptyNode.classList.add("git-status-empty");
    emptyNode.textContent = "nothing to commit, working directory clean";
    this.element.appendChild(emptyNode);
  }

  renderList(list) {
    this.empty();

    list.forEach((item) => {
      let {path, status, rootDir} = item;
      let itemNode = document.createElement("div");
      let modifierClass;

      switch (status) {
        case "??":
          modifierClass = "untracked";
          break;
        case "A ":
          modifierClass = "added";
          break;
        case "AD":
        case "MD":
        case " D":
        case "D ":
          modifierClass = "deleted";
          break;
        case "AM":
        case "MM":
        case "M ":
        case " M":
          modifierClass = "modified";
          break;
        default:
          modifierClass = "unknown";
      }

      itemNode.classList.add("git-status-item");
      itemNode.classList.add(modifierClass);
      if (modifierClass !== "deleted") {
        itemNode.addEventListener("click", () => {
          atom.workspace.open(`${rootDir}/${path}`, {});
        });
      }
      itemNode.textContent = `[${status}] ${rootDir}/${path}`;
      this.element.appendChild(itemNode);
    });
  }
}
