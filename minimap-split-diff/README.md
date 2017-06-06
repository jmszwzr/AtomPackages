# minimap-split-diff package

A plugin that adds [Split Diff's](https://github.com/mupchrch/split-diff) highlighting to the [Minimap](https://github.com/atom-minimap/minimap) view, making it easier to find differences throughout file versions in Atom.

![Minimap Split Diff plugin in action](https://github.com/mupchrch/minimap-split-diff/raw/master/demo.gif)

### Customization

The highlighting for this package uses global UI variables defined in your syntax theme. The variables are `@syntax-color-added`, `@syntax-color-removed`, and `@syntax-color-modified`. Make sure your theme defines these, so it is compatible with this package!

To override these colors in your `styles.less`, write selectors for `.minimap .added`, `.minimap .removed`, and/or `.minimap .selected`. For instance:

```
.minimap .added {
  background: blue !important;
}
```

### Notes

Both the Split Diff and Minimap packages must also be installed and enabled in Atom for this package to work.
