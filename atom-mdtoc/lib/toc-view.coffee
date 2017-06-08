toc = require 'markdown-toc'

module.exports =
class TocView
  constructor: (@pane) ->
    @lines = []
    @numbers = []
    @tocContent = ''
    @options =
      maxdepth: 6  # maxdepth
      firsth1: 1 # firsth1
      numbering: 0 # numbering
      flatten: 0 # flatten
      bullets: 1 # bullets
      updateOnSave: 1 # updateOnSave

    at = @
    @pane.getBuffer().onWillSave () ->
      if at.options.updateOnSave is 1
        at.autosave()


  # ----------------------------------------------------------------------------
  # main methods (highest logic level)


  insert: ->
    if @_hasToc()
      @_deleteToc()
      @pane.setTextInBufferRange [[@open,0], [@open,0]], @_createToc()
    else
      @pane.insertText @_createToc()


  delete: ->
    if @_hasToc()
      @_deleteToc()


  autosave: ->
    if @_hasToc()
      @_deleteToc()
      @pane.setTextInBufferRange [[@open,0], [@open,0]], @_createToc()



  # ----------------------------------------------------------------------------


  _hasToc: () ->
    @___updateLines()

    if @lines.length > 0
      @open = false
      @close = false
      options = undefined

      for i of @lines
        line = @lines[i]
        if @open is false
          if line.match /^<!--(.*)MDTOC(.*)-->$/g
            @open = parseInt i
            options = line
        else
          if line.match /^<!--(.*)\/MDTOC(.*)-->$/g
            @close = parseInt i
            break

      if @open isnt false and @close isnt false
        if options isnt undefined
          @__updateOptions options
          return true
    return false

  # embed list with the open and close comment:
  # <!-- TOC --> [list] <!-- /TOC -->
  _createToc: () ->
    @__updateTocContent()
    text = []
    text.push "<!-- MDTOC maxdepth:"+@options.maxdepth+" firsth1:"+@options.firsth1+" numbering:"+@options.numbering+" flatten:"+@options.flatten+" bullets:"+@options.bullets+" updateOnSave:"+@options.updateOnSave+" -->\n"
    text.push @tocContent
    text.push "<!-- /MDTOC -->"
    return text.join "\n"


  _deleteToc: () ->
    @pane.setTextInBufferRange [[@open,0], [@close,16]], ""


  # ----------------------------------------------------------------------------


  # parse all lines and find markdown headlines
  __updateTocContent: () ->
    @___updateLines()
    str = ''
    for i of @lines
      str += @lines[i]+'\n'
    mytoc =  toc(str, {firsth1: @options.firsth1 is 1, maxdepth: @options.maxdepth})
    @__initNumbers(mytoc)
    @tocContent = ''

    for i of mytoc.json
      heading = mytoc.json[i]      # loop begin
      level = heading.lvl
      maxdepth = @options.maxdepth

      if @options.firsth1 isnt 1   # ignore first level
        level = heading.lvl-1
        maxdepth = @options.maxdepth+1
        if level < 1
          continue

      if maxdepth < heading.lvl    # maxdepth reached
        continue

      if @options.flatten isnt 1   # tree view

        if @options.bullets isnt 1
          @tocContent += '&emsp;'.repeat(level - 1)
        else
          @tocContent += '   '.repeat(level - 1) + '- '

      else                         # flat list view
        if @options.bullets is 1
          @tocContent += '- '

      if @options.numbering is 1   # use numbers
        @tocContent += @__incNumbers(level)+' '
      @tocContent += '['+heading.content+'](#'+@___fixSlugQuirks(heading.slug)+')'
      @tocContent +='   \n'


  __initNumbers: (mytoc) ->
    maxLevel = 0
    for i of mytoc.json
      heading = mytoc.json[i]
      if maxLevel < heading.lvl
        maxLevel = heading.lvl
    @numbers = []
    @numbers.push(0) while @numbers.length isnt maxLevel+1


  __incNumbers: (level) ->
    if level < 1
      return ''
    if level > @numbers.length
      return ''
    @numbers[level] = @numbers[level] + 1
    for i in [level+1..@numbers.length]
      @numbers[i] = 0
    result = ''
    for i in [1..level]
      result += new String @numbers[i]+'.'
    return result



  __updateOptions: (line) ->
    options = line.match /(\w+(=|:)(\d|yes|no))+/g
    if options
      @options = {}
      for i of options
        option = options[i]

        key = option.match /^(\w+)/g
        key = new String key[0]

        value = option.match /(\d|yes|no|true|false)$/g
        value = new String value[0]
        if value.length > 1
          valOf = value.toLowerCase().valueOf()
          if valOf is new String("yes").valueOf()
            value = 1
          else if valOf is new String("true").valueOf()
            value = 1
          else
            value = 0

        if key.toLowerCase().valueOf() is new String("maxdepth").valueOf()
          @options.maxdepth = parseInt value
        else if key.toLowerCase().valueOf() is new String("firsth1").valueOf()
          @options.firsth1 = parseInt value
        else if key.toLowerCase().valueOf() is new String("numbering").valueOf()
          @options.numbering = parseInt value
        else if key.toLowerCase().valueOf() is new String("flatten").valueOf()
          @options.flatten = parseInt value
        else if key.toLowerCase().valueOf() is new String("bullets").valueOf()
          @options.bullets = parseInt value
        else if key.toLowerCase().valueOf() is new String("updateonsave").valueOf()
          @options.updateOnSave = parseInt value


  # ----------------------------------------------------------------------------
  # lightweight methods


  # update raw lines after initialization or changes
  ___updateLines: ->
    if @pane isnt undefined
      @lines = @pane.getBuffer().getLines()
    else
      @lines = []


  ___fixSlugQuirks: (s) ->
    result = ''
    parts = s.split("-")
    for part in parts
      if part is ''
        continue
      if result is ''
        result = part
      else
        result += '-' + part
    return result


  String::repeat = (n) -> Array(n+1).join(this)
