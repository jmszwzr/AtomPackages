/*! markdown-it-smartarrows 1.0.0 https://github.com//adam-p/markdown-it-smartarrows @license MIT */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.markdownitLinkScheme = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  if (state.md.options.smartArrows === false) {
    return;
  }

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

},{}]},{},[1])(1)
});