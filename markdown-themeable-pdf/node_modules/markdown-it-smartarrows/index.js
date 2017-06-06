/*
 * Copyright Adam Pritchard 2015
 * MIT License : http://adampritchard.mit-license.org/
 */

'use strict';
/*jshint node:true*/

/*
Based largely on the markdown-it typographer m-dash/n-dash replacements.
https://github.com/markdown-it/markdown-it/blob/cc8714584282209853fd14e3e0dfb20dfd9c289b/lib/rules_core/replacements.js
*/

var ARROWS_RE = /--|==/;

function smartArrows(state) {
  for (var blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    if (ARROWS_RE.test(state.tokens[blkIdx].content)) {
      doReplacementsInToken(state.tokens[blkIdx].children);
    }
  }
}

function doReplacementsInToken(inlineTokens) {
  var i, token;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];
    if (token.type === 'text') {
      if (ARROWS_RE.test(token.content)) {
        token.content = token.content
          // The order of these is important -- avoid premature match
          .replace(/(^|[^<])<-->([^>]|$)/mg, '$1\u2194$2')
          .replace(/(^|[^-])-->([^>]|$)/mg, '$1\u2192$2')
          .replace(/(^|[^<])<--([^-]|$)/mg, '$1\u2190$2')
          .replace(/(^|[^<])<==>([^>]|$)/mg, '$1\u21d4$2')
          .replace(/(^|[^=])==>([^>]|$)/mg, '$1\u21d2$2')
          .replace(/(^|[^<])<==([^=]|$)/mg, '$1\u21d0$2');
      }
    }
  }
}

module.exports = function smartArrows_plugin(md, scheme) {
  // Smart arrows must come before the built-in m-dash and n-dash support
  md.core.ruler.before('replacements', 'smartArrows', smartArrows);
};
