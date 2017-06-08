# atom-mdtoc: A Markdown TOC package for Atom

Generate a markdown TOC (table of contents) in [atom editor](https://atom.io/) using [Markdown-TOC](https://github.com/jonschlinkert/markdown-toc) and [Remarkable](https://github.com/jonschlinkert/remarkable).

![screenshot](https://raw.githubusercontent.com/mcpride/atom-mdtoc/master/screenshot.gif)

# Table Of Contents

<!-- MDTOC maxdepth:6 firsth1:0 numbering:1 flatten:0 bullets:0 updateOnSave:0 -->

1. [Installation](#installation)   
2. [Features](#features)   
&emsp;2.1. [Example (this Table Of Contents)](#example-this-table-of-contents)   
3. [Contributing](#contributing)   
4. [Author](#author)   
5. [License](#license)   
6. [Repeated heading example](#repeated-heading-example)   
&emsp;6.1. [Heading](#heading)   
&emsp;&emsp;6.1.1. [Sub-heading](#sub-heading)   
&emsp;&emsp;&emsp;6.1.1.1. [Sub-sub-heading](#sub-sub-heading)   
&emsp;6.2. [Heading](#heading-1)   
&emsp;&emsp;6.2.1. [Sub-heading](#sub-heading-1)   
&emsp;&emsp;&emsp;6.2.1.1. [Sub-sub-heading](#sub-sub-heading-1)   
&emsp;6.3. [Heading](#heading-2)   
&emsp;&emsp;6.3.1. [Sub-heading](#sub-heading-2)   
&emsp;&emsp;&emsp;6.3.1.1. [Sub-sub-heading](#sub-sub-heading-2)   

<!-- /MDTOC -->

## Installation

```
apm install atom-mdtoc
```

## Features

* Auto linking via anchor tags
* Depth control e.g. `maxDepth:6`
* Refresh list on save with `updateOnSave:1` (disable with `updateOnSave:0`)
* Exclude the first h1-level heading in a file with `firsth1:0` (include with `firsth1:1`)
* Use spaces instead of bullets with `bullets:0` (use bullets with `bullets:1`)
* Use a flatten list instead of a tree  with `flatten:1` (use tree with `flatten:0`)
* Header numbering with `numbering:1` (disable with `numbering:0`)
* Works with [repeated headings](#repeated-heading-example) (see also this [Table Of Contents](#table-of-contents))

### Example (this Table Of Contents)

```
  <!-- MDTOC maxdepth:6 firsth1:0 numbering:1 flatten:0 bullets:1 updateOnSave:0 -->

  - 1. [Installation](#installation)   
  - 2. [Features](#features)   
     - 2.1. [Example (this Table Of Contents)](#example-this-table-of-contents)   
  - 3. [Contributing](#contributing)   
  - 4. [Author](#author)   
  - 5. [License](#license)   
  - 6. [Repeated heading example](#repeated-heading-example)   
     - 6.1. [Heading](#heading)   
        - 6.1.1. [Sub-heading](#sub-heading)   
           - 6.1.1.1. [Sub-sub-heading](#sub-sub-heading)   
     - 6.2. [Heading](#heading-1)   
        - 6.2.1. [Sub-heading](#sub-heading-1)   
           - 6.2.1.1. [Sub-sub-heading](#sub-sub-heading-1)   
     - 6.3. [Heading](#heading-2)   
        - 6.3.1. [Sub-heading](#sub-heading-2)   
           - 6.3.1.1. [Sub-sub-heading](#sub-sub-heading-2)   

  <!-- /MDTOC -->
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, please create an issue.

## Author

**Marco Stolze**

* [github/mcpride](https://github.com/mcpride)

## License

Copyright © 2016 [Marco Stolze](https://github.com/mcpride). Released under the [MIT license](LICENSE.md).

## Repeated heading example

### Heading

This is a heading

#### Sub-heading

This is an sub heading

##### Sub-sub-heading

This is a sub sub heading

### Heading

This is a heading

#### Sub-heading

This is a sub heading

##### Sub-sub-heading

This is a sub sub heading

### Heading

This is a heading

#### Sub-heading

This is a sub heading

##### Sub-sub-heading

This is a sub sub heading
