## 0.1.2
* Fix memory leaks

## 0.1.1
* Add new `location` option `inside` which places the branch list inside the project directory as the first entry of the directory
* Rename `location` option `before-project` to `before`
* Add `separator` setting that, when turned on, draws a line between a project and the next branch list

## 0.1.0
* Change the text `local branches` to `branches [<project name>]`
* Add setting `location` that can be either
  - `top`: display the branches for all repositories at the top of the tree view
  - `before-project`: display the branches of a repository right before its corresponding project directory
* Fix the 'local branches' items in the tree view being grouped and ordered incorrectly when the a project directory is added or removed (#7)
* Fix text color indicating the selected branch changing when a checkout failed

## 0.0.6
* Fix crash on double-click on a branch (#6)

## 0.0.5
* Better integration with the tree view: navigating with keyboard now works (#5)

## 0.0.4
* @yoohahn - Fix crash when the project root folder is a subdirectory of a repository (#4)
* @yoohahn - Fix crash on Windows where paths contain `\` but they weren't escaped (#4)

## 0.0.3
* Fix crash when the `.git` directory wasn't visible in the tree view (#2)

## 0.0.2
* Better branch name parsing (#1)

## 0.0.1
* Every feature added
