"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var BackButton = function BackButton() {
  var _React$createElement, _React$createElement2;

  return /*#__PURE__*/_react.default.createElement("div", {
    class: "back-button"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "-bg-yellow"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Back to"), /*#__PURE__*/_react.default.createElement("span", null, "All Articles"), /*#__PURE__*/_react.default.createElement("div", {
    class: "arrowPacman"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "arrowPacman-clip"
  }, /*#__PURE__*/_react.default.createElement("svg", (_React$createElement = {
    width: "14",
    height: "14",
    viewBox: "0 0 32 32",
    class: "icon icon-arrow-left"
  }, (0, _defineProperty2.default)(_React$createElement, "viewBox", "0 0 32 32"), (0, _defineProperty2.default)(_React$createElement, "aria-hidden", "true"), _React$createElement), /*#__PURE__*/_react.default.createElement("path", {
    d: "M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"
  })), /*#__PURE__*/_react.default.createElement("svg", (_React$createElement2 = {
    width: "14",
    height: "14",
    viewBox: "0 0 32 32",
    class: "icon icon-arrow-left"
  }, (0, _defineProperty2.default)(_React$createElement2, "viewBox", "0 0 32 32"), (0, _defineProperty2.default)(_React$createElement2, "aria-hidden", "true"), _React$createElement2), /*#__PURE__*/_react.default.createElement("path", {
    d: "M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"
  }))))));
};

var _default = BackButton;
exports.default = _default;