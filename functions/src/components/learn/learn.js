"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Card = _interopRequireDefault(require("./learningCards/Card"));

var _Footer = _interopRequireDefault(require("../layout/Footer/Footer"));

var _specialityContext = require("../../contexts/specialityContext");

var _framerMotion = require("framer-motion");

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = require("react-helmet");

var _preloader = _interopRequireDefault(require("./learningCards/Preloader/preloader"));

var _authContext = require("../../contexts/authContext");

var Learn = function Learn() {
  var _useContext = (0, _react.useContext)(_specialityContext.SpecialityContext),
      specialities = _useContext.specialities;

  var LearnCards = specialities && specialities.specialities;

  var _useContext2 = (0, _react.useContext)(_authContext.AuthContext),
      isAdmin = _useContext2.isAdmin;

  return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    exit: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    initial: {
      opacity: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Learn all the skills necessary for freelancing in webDevelopment"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "robots",
    content: "index follow"
  })), LearnCards ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "banner-ad-right"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "banner-ad-left"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "container learn-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    learningCards: LearnCards
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "clear-flex"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 ml-3 mr-3"
  }, isAdmin ? /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/addcard"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, null, "Add Card"))) : null)), /*#__PURE__*/_react.default.createElement(_Footer.default, null)) : /*#__PURE__*/_react.default.createElement(_preloader.default, null));
};

var _default = Learn;
exports.default = _default;