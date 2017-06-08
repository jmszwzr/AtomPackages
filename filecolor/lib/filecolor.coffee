FilecolorView = require './filecolor-view'
{CompositeDisposable} = require 'atom'

module.exports = Filecolor =
  filecolorView: null
  isActive: null

  # modalPanel: null
  subscriptions: null

  activate: (state) ->
    atom.packages.activatePackage('tree-view').then ->
      Filecolor.filecolorView = new FilecolorView(state.fileColorsViewState)
      Filecolor.isActive = true;
      return

    # Filecolor.filecolorView = new FilecolorView(state.fileColorsViewState)
    # Filecolor.isActive = true;

    # @filecolorView = new FilecolorView(state.filecolorViewState)
    # @modalPanel = atom.workspace.addModalPanel(item: @filecolorView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'filecolor:toggle': => @toggle()

  deactivate: ->
    # @modalPanel.destroy()
    @subscriptions.dispose()
    @filecolorView.destroy()

  serialize: ->
    filecolorViewState: @filecolorView.serialize()

  toggle: ->

    if @isActive == true
      # remove colors
      @isActive = false
      @filecolorView.removeColors()
    else
      # apply colors
      @isActive = true
      @filecolorView.applyColors()

    return
