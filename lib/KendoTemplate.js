var _ = require('lodash');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var KendoTemplate = function (component) {
  return ReactDOMServer.renderToString(component);
};

module.exports = KendoTemplate;
