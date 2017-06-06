[![Build Status](https://travis-ci.org/adam-p/markdown-it-smartarrows.svg?branch=master)](https://travis-ci.org/adam-p/markdown-it-smartarrows)
[![NPM version](https://img.shields.io/npm/v/markdown-it-footnote.svg?style=flat)](https://www.npmjs.org/package/markdown-it-footnote)
[![Coverage Status](https://coveralls.io/repos/adam-p/markdown-it-smartarrows/badge.svg)](https://coveralls.io/r/adam-p/markdown-it-smartarrows)


# markdown-it-smartarrows

This is a [markdown-it](https://github.com/markdown-it/markdown-it) plugin that adds "smart arrows" to markdown-it's typographic enhancements.

```
--> →
<-- ←
<--> ↔
==> ⇒
<== ⇐
<==> ⇔
```

```
var mdSmartArrows = require('markdown-it-smartarrows');
var md = require('markdown-it')().use(mdSmartArrows);
```

Note that using this plugin will interfere with using HTML comments in your Markdown. 

More arrows for potential expansion can be found here:
http://unicode-table.com/en/sets/arrows-symbols/

Originally developed for use with [Markdown Here](https://github.com/adam-p/markdown-here).
