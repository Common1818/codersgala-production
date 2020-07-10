"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

var _SignedOutLinks = _interopRequireDefault(require("./SignedOutLinks"));

var _SignedInLinks = _interopRequireDefault(require("./SignedInLinks"));

var _authContext = require("../../../contexts/authContext");

var _authFunctions = require("../../../crudFunctions/authFunctions");

var _modeFunctions = require("../../../crudFunctions/modeFunctions");

var _modeContext = require("../../../contexts/modeContext");

var _jquery = _interopRequireDefault(require("jquery"));

/* eslint-disable */
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// jQuery-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// import $ from "jquery";
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var Navbar = function Navbar(props) {
  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      authData = _useContext.authData,
      authState = _useContext.authState,
      dispatch = _useContext.dispatch;

  var dispatch2 = (0, _react.useContext)(_modeContext.ModeContext).dispatch; // To refresh the page so that new profile gets loaded

  if (authData.reloadPage === 100) {
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  } // -------------------------------------------------


  (0, _react.useEffect)(function () {
    (0, _authFunctions.getProfile)(dispatch);
  }, [authState]);
  (0, _react.useEffect)(function () {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 767) {
        (0, _jquery.default)("body .logo").css({
          "font-size": "2rem"
        });
        (0, _jquery.default)(".dropdown-accordion").removeClass("dropdown-accordion");
      }

      (0, _jquery.default)(window).resize(function () {
        if (window.innerWidth >= 767) {
          (0, _jquery.default)("body .logo").css({
            "font-size": "2rem"
          });
          (0, _jquery.default)(".dropdown-accordion").removeClass("dropdown-accordion");
        } else {
          (0, _jquery.default)("body .logo").css({
            "font-size": "1.2rem"
          });
        }
      });
    } // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

  }, []); // Getting the current mode from local storage

  if (typeof window !== "undefined") {
    var mode = "light";
    mode = localStorage.getItem("mode");

    if (mode === "dark") {
      (0, _jquery.default)("body").addClass("dark");
      (0, _jquery.default)(".mode-icon").attr("src", "https://www.svgrepo.com/show/3158/moon.svg");
      (0, _jquery.default)("#circle").css("background-color", "#111");
      (0, _jquery.default)(".switch").addClass("switched");
    } else {
      (0, _jquery.default)("body").removeClass("dark");
      (0, _jquery.default)(".mode-icon").attr("src", "https://www.svgrepo.com/show/83726/sun.svg");
      (0, _jquery.default)("#circle").css("background-color", "#f1f1f1");
      (0, _jquery.default)(".switch").removeClass("switched");
    }
  } //


  var credentials = authData.userProfile;
  var userUid = authState && authState.uid;
  var profileCompleted = authData && authData.userProfile;
  var profileUpdated = profileCompleted && profileCompleted.hasUpdatedProfile; // console.log(profile);

  var links = userUid ? /*#__PURE__*/_react.default.createElement(_SignedInLinks.default, null) : /*#__PURE__*/_react.default.createElement(_SignedOutLinks.default, null);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navigation-wrap bg-light start-header start-style"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, {
    className: "dropdown-accordion"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand-md navbar-light"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-brand logo  nav-link"
  }, "Coders Gala")), /*#__PURE__*/_react.default.createElement("div", {
    id: "switch",
    onClick: function onClick() {
      if (localStorage.getItem("mode") === "light") {
        (0, _modeFunctions.updateMode)("dark", dispatch2);
      } else {
        (0, _modeFunctions.updateMode)("light", dispatch2);
      }

      if ((0, _jquery.default)("body").hasClass("dark")) {
        (0, _jquery.default)("body").removeClass("dark");
        localStorage.setItem("mode", "light");
        (0, _jquery.default)(".mode-icon").attr("src", "https://www.svgrepo.com/show/83726/sun.svg");
        (0, _jquery.default)("#circle").css("background-color", "#f1f1f1");
        (0, _jquery.default)(".switch").removeClass("switched");
      } else {
        (0, _jquery.default)("body").addClass("dark");
        localStorage.setItem("mode", "dark");
        (0, _jquery.default)(".mode-icon").attr("src", "https://www.svgrepo.com/show/3158/moon.svg");
        (0, _jquery.default)("#circle").css("background-color", "#111");
        (0, _jquery.default)(".switch").addClass("switched");
      } // window.location.reload();

    },
    className: "switch float-right"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "circle"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "mode-icon",
    style: {
      width: "20px"
    },
    alt: ""
  }))), authState ? /*#__PURE__*/_react.default.createElement("div", {
    className: "points-box "
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "points-text"
  }, " Points "), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/715/715709.svg",
    className: "points-img"
  })), /*#__PURE__*/_react.default.createElement("span", null, " ", credentials && credentials.points, " "))) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "signed-links"
  }, links), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Toggle, {
    className: "nav-btn",
    onClick: function onClick() {
      if ((0, _jquery.default)(".navbar-toggler").attr("aria-expanded") == "false") {
        (0, _jquery.default)(".navbar-toggler").attr("aria-expanded", "true");
      } else {
        (0, _jquery.default)(".navbar-toggler").attr("aria-expanded", "false");
      }
    },
    as: _reactBootstrap.Button,
    variant: "link",
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "navbar-toggler",
    type: "button",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    className: " ",
    id: "navbarSupportedContent",
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement("div", null, links))))))));
};

var _default = Navbar;
exports.default = _default;