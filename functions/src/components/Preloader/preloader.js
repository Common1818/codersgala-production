"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Preloader = function Preloader() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loader-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "loader-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "loader1"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "loader2"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "loader3"
  })));
};

var _default = Preloader;
exports.default = _default;