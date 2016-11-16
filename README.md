# kendo-ui-react - NOT MAINTAINED

[![npm version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

React Component Library for Kendo UI Widgets. There exists a React Component
named for every Kendo widget in the
[kendo.ui](http://docs.telerik.com/kendo-ui/api/javascript/ui/ui), [kendo.ui.mobile](http://docs.telerik.com/kendo-ui/api/javascript/mobile/application) and [kendo.ui.dataviz](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/) namespaces.
Tested on React 0.14 and KendoUI 2015.2.902.

This library is based on [react-kendo](https://github.com/tjwebb/react-kendo) which appears to be inactive.

## Install

```sh
$ npm install kendo-ui-react --save
```

```html
  <script src="http://cdn.kendostatic.com/2015.2.902/js/kendo.all.min.js"></script>
  <link href='http://cdn.kendostatic.com/2015.2.902/styles/kendo.common.min.css' rel='stylesheet'>
  <!-- and so forth... -->
```

Please note: Kendo Professional Components require
[a License](http://www.telerik.com/purchase/kendo-ui).

## Usage
```js
var React = require('react');
var k = React.Kendo = require('kendo-ui-react');

/**
 * Instead of, e.g.
 * $('#my-splitter').kendoSplitter(splitterOptions);
 */
var splitterOptions = {
  orientation: 'horizontal',
  panes: [
    { collapsible: false, size: '300px' },
    { resizable: true }
  ]
};
var treeOptions = { /* ... */ };
var gridOptions = { /* ... */ };

var Workstation = React.createClass({
  render: function () {
    return (
      <k.Splitter options={splitterOptions}>
        <k.TreeView options={treeOptions} />
        <k.Grid options={gridOptions} />
      </k.Splitter>
    );
  }
});
```

## Properties

### `options`
The main Kendo options object that is sent into the constructor. e.g.
`$('#my-splitter').kendoSplitter(options);`

### `tag`
The `tag` property specifies the html tag that the Kendo widget will be bound
to. This is `div` by default, but can be set to
[any tag supported by React](http://facebook.github.io/react/docs/tags-and-attributes.html#html-elements).

### `reactive`
Version 0.13 and later support automatically re-initializing the Kendo Widget
when the `options` property is updated. This is useful for re-loading Grids
with new data, among other things. This is `false` by default.

### `debug`
Set `debug=true` to log detailed information on the lifecycle events of your
kendo-ui-react component.

## Additional Components

### `React.Kendo.Template`

A React Component that represents a [Kendo Template](http://docs.telerik.com/kendo-ui/framework/templates/overview).
Easily create a Kendo Template from a React Component. Additionally mixin
`React.Kendo.TemplateMixin`.

```js
var k = React.Kendo;
var MyListItem = React.createClass({
  mixins: [
    k.TemplateMixin
  ],
  render: function () {
    var item = this.props.item;
    return (
      <span>{item.title}</span>
    );
  }
});
var KendoList = React.createClass({
  render: function () {
    return (
      <k.ListView options={
        template: function (item) {
          return k.Template(<MyListItem item={item} />);
        }
      } />
    );
  }
});
```


## Supplemental Functions

`kendo-ui-react` also includes some extra functionality that isn't included in
Kendo. These functions are added to the Kendo components via React mixins.


### `Grid.enableDraggableRows(group, options)`

Invoke this function to make Grid rows draggable. This is not possible by
default in the kendo-ui library.

```js
var k = React.Kendo;
var KendoList = React.createClass({
  componentDidMount: function () {
    this.refs.grid.enableDraggableRows('myGroup', {
      drag: function (e) {
        // some custom stuff
      }
    });
  },
  render: function () {
    return (
      <k.Grid ref='grid' options={...} />
    );
  }
});
```


## License
MIT

[npm-image]: https://img.shields.io/npm/v/kendo-ui-react.svg?style=flat-square
[npm-url]: https://npmjs.org/package/kendo-ui-react
[travis-image]: https://img.shields.io/travis/jakubkottnauer/kendo-ui-react.svg?style=flat-square
[travis-url]: https://travis-ci.org/jakubkottnauer/kendo-ui-react
[daviddm-image]: http://img.shields.io/david/jakubkottnauer/kendo-ui-react.svg?style=flat-square
[daviddm-url]: https://david-dm.org/jakubkottnauer/kendo-ui-react
