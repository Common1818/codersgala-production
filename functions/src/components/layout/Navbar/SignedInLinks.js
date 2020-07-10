"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _jquery = _interopRequireDefault(require("jquery"));

var _authFunctions = require("../../../crudFunctions/authFunctions");

var _authContext = require("../../../contexts/authContext");

var SignedInLinks = function SignedInLinks() {
  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      dispatch = _useContext.dispatch;

  (0, _react.useEffect)(function () {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 500) {
        (0, _jquery.default)(".nav-item a").click(function () {
          (0, _jquery.default)("html, body").animate({
            scrollTop: 250
          }, 100);
        });
      }
    }
  }, []);

  var handleSignout = function handleSignout() {
    (0, _authFunctions.signOut)(dispatch);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav ml-auto py-4 py-md-0"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/",
    className: "nav-link"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/about",
    className: "nav-link"
  }, "About")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link ",
    to: "/learn",
    role: "button",
    "aria-expanded": "false"
  }, "Learn"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu"
  })), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    type: "button",
    onClick: handleSignout,
    className: "nav-link"
  }, "LogOut"))));
};

var _default = SignedInLinks;
exports.default = _default;