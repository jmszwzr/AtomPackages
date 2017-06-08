module.exports =
class FilecolorView
  constructor: (serializedState) ->
    # Create root element
    @element = document.createElement('div')
    @element.classList.add('filecolor')

    # Create message element
    # message = document.createElement('div')
    # message.textContent = "The Filecolor package is Alive! It's ALIVE!"
    # message.classList.add('message')
    # @element.appendChild(message)

    # apply colors
    this.applyColors()

  # Returns an object that can be retrieved when package is activated
  serialize: ->

  # Tear down any state and detach
  destroy: ->
    @element.remove()

  getElement: ->
    @element

  removeColors: ->
    # remove file colors from atom-workspace
    workspace = document.querySelector('atom-workspace');
    workspace.classList.remove('file-colors') if workspace;

  applyColors: ->
    # apply file colors to atom-workspace
    workspace = document.querySelector('atom-workspace');
    workspace.classList.add('file-colors') if workspace;
