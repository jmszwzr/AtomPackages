# Atom Project Util

Atom library that provides project utilities. Primarily switching in the same window. This is its own library
because there are a number of nuances that would better serve the community
to be addressed in a single location (and then each package that
would like the functionality can just use this library).

## Install

```
npm install --save atom-project-util
```

## Usage

```js
const util = require("atom-project-util")

// Switch to a project with path1 and path2 as the opened paths
util.switch(["path1", "path2"])

// Close project
util.close()
```

## License

[MIT License](http://opensource.org/licenses/MIT) - see the [LICENSE](https://github.com/mehcode/atom-project-switch/blob/master/LICENSE.md) for more details.
