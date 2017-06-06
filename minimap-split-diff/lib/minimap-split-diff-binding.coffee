{CompositeDisposable} = require 'event-kit'

module.exports =
class MinimapSplitDiffBinding
  constructor: (@minimap) ->
    @editor = @minimap.getTextEditor()
    @splitDecorations = []
    @subscriptions = new CompositeDisposable

  handleMarkerLayers: (markerLayers) ->
    if markerLayers?
      editor1 = markerLayers.editor1
      editor2 = markerLayers.editor2

      if @editor?.id == editor1.id
        # handle current markers
        @handleMarkerLayer(editor1.lineMarkerLayer, editor1.highlightType)
        @handleMarkerLayer(editor1.selectionMarkerLayer, 'selected')
        # then attach update listener for future markers
        editor1.lineMarkerLayer.onDidUpdate () =>
          @handleMarkerLayer(editor1.lineMarkerLayer, editor1.highlightType)
        editor1.selectionMarkerLayer.onDidUpdate () =>
          @handleMarkerLayer(editor1.selectionMarkerLayer, 'selected')
      else if @editor?.id == editor2.id
        # handle current markers
        @handleMarkerLayer(editor2.lineMarkerLayer, editor2.highlightType)
        @handleMarkerLayer(editor2.selectionMarkerLayer, 'selected')
        # then attach update listener for future markers
        editor2.lineMarkerLayer.onDidUpdate () =>
          @handleMarkerLayer(editor2.lineMarkerLayer, editor2.highlightType)
        editor2.selectionMarkerLayer.onDidUpdate () =>
          @handleMarkerLayer(editor2.selectionMarkerLayer, 'selected')

  destroy: ->
    @removeMarkers()
    @splitDecorations = null
    @subscriptions.dispose()
    @minimap = null
    @editor = null

  removeMarkers: ->
    if @splitDecorations
      for decoration in @splitDecorations
        decoration.destroy()

  handleMarkerLayer: (markerLayer, highlightType) ->
    markerLayer.getMarkers().forEach (marker) =>
      @createDecoration(marker, highlightType)

  # highlight types include: added, removed, selected
  createDecoration: (marker, highlightType) ->
    minimapDecoration = @minimap.decorateMarker(marker, type: 'line', class: highlightType)
    @splitDecorations.push minimapDecoration
