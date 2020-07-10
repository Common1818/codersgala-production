"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./App"));

var _specialityContext = _interopRequireDefault(require("./contexts/specialityContext"));

var _authContext = _interopRequireDefault(require("./contexts/authContext"));

var _topicContext = _interopRequireDefault(require("./contexts/topicContext"));

var _articleContext = _interopRequireDefault(require("./contexts/articleContext"));

var _homeContext = _interopRequireDefault(require("./contexts/homeContext"));

var _modeContext = _interopRequireDefault(require("./contexts/modeContext"));

// Bootstrap
console.log(window.__INITIAL_DATA__);

_reactDom.default.hydrate( /*#__PURE__*/_react.default.createElement(_authContext.default, null, /*#__PURE__*/_react.default.createElement(_specialityContext.default, null, /*#__PURE__*/_react.default.createElement(_topicContext.default, null, /*#__PURE__*/_react.default.createElement(_articleContext.default, null, /*#__PURE__*/_react.default.createElement(_homeContext.default, null, /*#__PURE__*/_react.default.createElement(_modeContext.default, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_App.default, {
  articlesArray: window.__INITIAL_DATA__
})))))))), document.getElementById("root"));