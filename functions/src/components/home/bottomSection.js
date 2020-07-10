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

var _homeContext = require("../../contexts/homeContext");

var BottomSection = function BottomSection() {
  var _useContext = (0, _react.useContext)(_homeContext.HomeContext),
      home = _useContext.home;

  (0, _react.useEffect)(function () {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 600) {
        (0, _jquery.default)(window).scroll(function () {
          var scroll = window.scrollY;

          if (scroll < 150) {
            (0, _jquery.default)(".hero-box__circle--blue").removeClass("one");
            (0, _jquery.default)(".hero-box__circle--orange").removeClass("three");
            (0, _jquery.default)(".hero-box__circle--green").removeClass("two");
          }

          if (scroll > 150 && scroll < 450) {
            (0, _jquery.default)(".hero-box__circle--blue").addClass("one");
            (0, _jquery.default)(".hero-box__circle--orange").removeClass("three");
            (0, _jquery.default)(".hero-box__circle--green").removeClass("two");
          }

          if (scroll > 450 && scroll < 650) {
            (0, _jquery.default)(".hero-box__circle--green").addClass("two");
            (0, _jquery.default)(".hero-box__circle--blue").removeClass("one");
            (0, _jquery.default)(".hero-box__circle--orange").removeClass("three");
          }

          if (scroll > 650) {
            (0, _jquery.default)(".hero-box__circle--orange").addClass("three");
            (0, _jquery.default)(".hero-box__circle--green").removeClass("two");
            (0, _jquery.default)(".hero-box__circle--blue").removeClass("one");
          }
        });
      }
    }

    if (window.innerWidth > 600) {
      console.log("width is greater than 600");
      (0, _jquery.default)(document).ready(function () {
        (0, _jquery.default)(".hero-box__circle--green").addClass("two");
        (0, _jquery.default)(".hero-box__circle--orange").addClass("three");
        (0, _jquery.default)(".hero-box__circle--blue").addClass("one");
        window.setTimeout(function () {
          (0, _jquery.default)(".hero-box__circle--blue").removeClass("one");
          window.setTimeout(function () {
            (0, _jquery.default)(".hero-box__circle--green").removeClass("two");
            window.setTimeout(function () {
              (0, _jquery.default)(".hero-box__circle--orange").removeClass("three");
            }, 850);
          }, 750);
        }, 650);
      });
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-box-container"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/about",
    className: "hero-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "hero-box__circle hero-box__circle--blue"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "hero-box__title"
  }, "What is Coders Gala?"), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-box__body"
  }, "CodersGala is a free to use platform for all those people who are unwilling to pay high ransom to these crooked coaching centers for learning web Development. We won't be spoon feeding you but we will guide you. Anyway, if you are eager to learn you will find a way.")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/about/#aboutus",
    className: "hero-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "hero-box__circle hero-box__circle--green"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "hero-box__title"
  }, "Who are We ?"), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-box__body"
  }, "We started web development on our own, with no direction and no coaching. All we had was determination and internet. We consider ourselves lucky to be able to provide the support that had been provided to us.")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/learn",
    className: "hero-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "hero-box__circle hero-box__circle--orange"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "hero-box__title"
  }, "Start Learning .."), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-box__body"
  }, ". We are working tirelessly to cover backend. We will have the articles aired on backend before september. The course will cover Front-end, API, Nodejs-express, MongoDb, MySQL, Hosting, React, Firebase... and a lot more projects."))));
};

var _default = BottomSection;
exports.default = _default;