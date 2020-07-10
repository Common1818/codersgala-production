"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _footerSocialMedia = _interopRequireDefault(require("./footerSocialMedia"));

var _footerNewsletter = _interopRequireDefault(require("./footerNewsletter"));

var Footer = function Footer() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-cont"
  }, /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "banner-ad-bottom"
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "100%"
    },
    src: "https://lh3.googleusercontent.com/YeImnFkq_Odr8TAusX8men4U2DpS1GnXyJNJjKAKPe0z8GAqkrPoHGK9ob6_wKqqpHcPI6Mlo_dnv7QpMUWmA9LnihKViC_hSaO2WQ=s0",
    alt: "ad"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left-col"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "logo"
  }, "Coders Gala"), /*#__PURE__*/_react.default.createElement(_footerSocialMedia.default, null), /*#__PURE__*/_react.default.createElement("p", {
    className: "rights-text"
  }, "\xA9 2020 Coders Gala , All Rights Reserved")), /*#__PURE__*/_react.default.createElement(_footerNewsletter.default, null))));
};

var _default = Footer;
exports.default = _default;