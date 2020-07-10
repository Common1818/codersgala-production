"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _topSection = _interopRequireDefault(require("./topSection"));

var _bottomSection = _interopRequireDefault(require("./bottomSection"));

var _preloader = _interopRequireDefault(require("../Preloader/preloader"));

var _homeContext = require("../../contexts/homeContext");

var _framerMotion = require("framer-motion");

var _reactHelmet = require("react-helmet");

var Home = function Home() {
  var _useContext = (0, _react.useContext)(_homeContext.HomeContext),
      home = _useContext.home;

  var homeContent = home && home.home;
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
  }, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, "Coders Gala"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Coders Gala is a free platform to learn webdevelopment for freelancing"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "robots",
    content: "index follow"
  })), /*#__PURE__*/_react.default.createElement("div", {
    id: "myDiv"
  }, homeContent ? /*#__PURE__*/_react.default.createElement("div", {
    className: "home-container"
  }, /*#__PURE__*/_react.default.createElement(_topSection.default, null), /*#__PURE__*/_react.default.createElement(_bottomSection.default, null)) : /*#__PURE__*/_react.default.createElement(_preloader.default, null)));
};

var _default = Home;
exports.default = _default;