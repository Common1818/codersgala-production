"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var SomeButton = function SomeButton(_ref) {
  var buttonText = _ref.buttonText;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "button"
  }, /*#__PURE__*/_react.default.createElement("span", null, buttonText), /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("polyline", {
    className: "o1",
    points: "0 0, 150 0, 150 55, 0 55, 0 0"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    className: "o2",
    points: "0 0, 150 0, 150 55, 0 55, 0 0"
  })));
};

var _default = SomeButton;
exports.default = _default;