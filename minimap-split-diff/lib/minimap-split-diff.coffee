{CompositeDisposable} = require 'event-kit'

module.exports =
  active: false
  markerLayers: null
  bindingsById: {}
  subscriptionsById: {}
  subscriptions: {}

  isActive: -> @active

  activate: (state) ->
    @subscriptions = new CompositeDisposable

  consumeSplitDiff: (splitDiffService) ->
    @waitForDiff(splitDiffService)

  consumeMinimapServiceV1: (@minimap) ->
    @minimap.registerPlugin 'split-diff', this

  deactivate: ->
    @minimap.unregisterPlugin 'split-diff'
    @minimap = null

  waitForDiff: (splitDiffService)->
    splitDiffService.getMarkerLayers().then (@markerLayers) =>
      for i of @bindingsById
        @bindingsById[i].handleMarkerLayers(@markerLayers)
      @markerLayers.editor1.lineMarkerLayer.onDidDestroy () =>
        @markerLayers = null
        @waitForDiff(splitDiffService)

  activatePlugin: ->
    return if @active

    @active = true

    @subscriptions.add @minimap.observeMinimaps (minimap) =>
      MinimapSplitDiffBinding = require './minimap-split-diff-binding'

      binding = new MinimapSplitDiffBinding(minimap)
      @bindingsById[minimap.id] = binding

      binding.handleMarkerLayers(@markerLayers)

      @subscriptionsById[minimap.id] = minimap.onDidDestroy =>
        @subscriptionsById[minimap.id]?.dispose()
        @bindingsById[minimap.id]?.destroy()

        delete @bindingsById[minimap.id]
        delete @subscriptionsById[minimap.id]

  deactivatePlugin: ->
    return unless @active

    @active = false
    for i of @bindingsById
      @bindingsById[i].destroy()
    @subscriptions.dispose()
