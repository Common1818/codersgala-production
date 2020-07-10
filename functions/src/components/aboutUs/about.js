"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _framerMotion = require("framer-motion");

var _reactHelmet = require("react-helmet");

var _TopSlide = _interopRequireDefault(require("./TopSlide"));

var _aboutDin = _interopRequireDefault(require("./aboutDin"));

var _aboutUs = _interopRequireDefault(require("./aboutUs"));

var _Footer = _interopRequireDefault(require("../layout/Footer/Footer"));

var About = function About() {
  return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, "Coders Gala - about"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "DoItNow is a free platform to learn webdevelopment for freelancing"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "robots",
    content: "index follow"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-page"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "banner-ad-right"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "scroller"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "about-header"
  }, /*#__PURE__*/_react.default.createElement(_TopSlide.default, null)), /*#__PURE__*/_react.default.createElement("section", {
    className: "main"
  }, /*#__PURE__*/_react.default.createElement(_aboutDin.default, null)), /*#__PURE__*/_react.default.createElement("section", {
    id: "aboutus"
  }, /*#__PURE__*/_react.default.createElement(_aboutUs.default, null))), /*#__PURE__*/_react.default.createElement(_Footer.default, null)));
};

var _default = About;
exports.default = _default;