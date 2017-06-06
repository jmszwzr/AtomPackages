/*
 * Copyright Adam Pritchard 2015
 * MIT License : http://adampritchard.mit-license.org/
 */

'use strict';
/*jshint node:true*/
/* global describe, it, before, beforeEach, after, afterEach */
/*eslint-env mocha*/

var expect = require('chai').expect;

describe('markdown-it-smartarrows', function () {
  it('should render smart arrows', function() {
    var s, target;
    var md = require('markdown-it')({typographer:true}).use(require('../'));

    s = '--> <-- <--> ==> <== <==>';
    target = '<p>→ ← ↔ ⇒ ⇐ ⇔</p>\n';
    expect(md.render(s)).to.equal(target);

    // And should not break headers or m-dashes
    s = 'Arrows\n==\nAnd friends\n--\n--> <-- <-->\n\n==> <== <==> --- m-dash -- n-dash';
    target = '<h1>Arrows</h1>\n<h2>And friends</h2>\n<p>→ ← ↔</p>\n<p>⇒ ⇐ ⇔ — m-dash – n-dash</p>\n';
    expect(md.render(s)).to.equal(target);
  });

  it('should properly cope with unicode spaces', function() {
    var s, target;
    var md = require('markdown-it')().use(require('../'));

    // \u3000 is a unicode space character that doesn't match \s in older browsers.
    // http://www.fileformat.info/info/unicode/category/Zs/list.htm
    s = 'a ==>\u3000b';
    target = '<p>a ⇒\u3000b</p>\n';
    expect(md.render(s)).to.equal(target);
  });
});
