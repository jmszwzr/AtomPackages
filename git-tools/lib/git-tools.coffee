{CompositeDisposable} = require 'atom'
{exec} = require 'child_process'

module.exports = GitTools =
  subscriptions: null

  activate: (state) ->
    @subscriptions = new CompositeDisposable
    # Register command that toggles this view
    @subscriptions.add
    atom.commands.add 'atom-workspace', 'git-tools:git-gui': => @git_gui()
    @subscriptions.add
    atom.commands.add 'atom-workspace', 'git-tools:git-gui-blame': => @git_gui_blame()
    @subscriptions.add
    atom.commands.add 'atom-workspace', 'git-tools:gitk': => @git_k()
    @subscriptions.add
    atom.commands.add(
      'atom-workspace',
      'git-tools:gitk-current-file': => @git_k_cf()
    )

    # Subscribe to the event when the multiple cursor notification config is modified
    @subscriptions.add atom.config.onDidChange 'git-tools.blameCursorNotification', =>
      @blameCursorNotification = atom.config.get('git-tools.blameCursorNotification')

    @blameCursorNotification = atom.config.get('git-tools.blameCursorNotification')

  dir: ->
    editor = atom.workspace.getActivePaneItem()
    if editor == undefined
      undefined
    else
      directoryPath = editor?.getDirectoryPath()

  file: ->
    editor = atom.workspace.getActivePaneItem()
    if editor == undefined
      undefined
    else
      editor?.buffer.file?.path

  line: ->
    editor = atom.workspace.getActiveTextEditor()
    if editor == undefined
      undefined
    else
      line = editor.getCursorScreenPosition().row + 1
      if editor.hasMultipleCursors() && @blameCursorNotification
        atom.notifications.addInfo(
          'Git Gui Blame',
          {
            detail: 'Position could not be resolved due multiple cursors.\nLine (used): ' + line
            dismissable: true
          }
        )
      line

  isUndefined: (dir, title) ->
    if dir == undefined
      atom.notifications.addError(
        title ,
        { detail: "Not found!\nOpen file in project." }
      )
      true
    else
      false

  # resolves cli command (since windows needs another)
  platform_cmd: ->
    if process.platform == 'win32'
      'pushd'
    else
      'cd'

  # commands
  git_k: ->
    dir = @dir()
    return if @isUndefined(dir, "Gitk")
    exec @platform_cmd() + ' ' + dir + ' && gitk'

  git_k_cf: ->
    file = @file()
    return if @isUndefined(file, "Gitk Current File")
    exec @platform_cmd() + ' ' + @dir() + ' && gitk ' + file

  git_gui: ->
    dir = @dir()
    return if @isUndefined(dir, "Git Gui")
    exec @platform_cmd() + ' ' + dir + ' && git gui'

  git_gui_blame: ->
    dir = @dir()
    file = @file()
    line = @line()

    return if @isUndefined(dir,  "Git Gui Blame")
    return if @isUndefined(file, "Git Gui Blame")
    return if @isUndefined(line, "Git Gui Blame")

    exec @platform_cmd() + ' "' + dir + '" && git gui blame --line=' + line + ' ' + ' "' + file + '"'
