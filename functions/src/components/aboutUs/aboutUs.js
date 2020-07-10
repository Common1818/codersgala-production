"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

var _reactBootstrap = require("react-bootstrap");

var _profileCard = _interopRequireDefault(require("./profileCard"));

var AboutUs = function AboutUs() {
  if (typeof window !== "undefined") {
    var myFunction = function myFunction() {
      if (window.scrollY > 1550) {
        (0, _jquery.default)(".profile-card").addClass("profile-card-anim");
      }
    };

    window.onscroll = function () {
      myFunction();
    };
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-container"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-heading"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "About ", /*#__PURE__*/_react.default.createElement("span", null, "Us"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-text"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor dolore odit, neque itaque iure quas mollitia nihil cumque rem harum consequuntur consectetur. Autem fugit, doloribus sint enim error sequi quo rem minima magni excepturi expedita mollitia recusandae harum alias repellendus, sit voluptate facilis similique at in asperiores sunt inam saepe qui. Nisi minima ipsa illo tempore quod enim eum quidem?")), /*#__PURE__*/_react.default.createElement("div", {
    className: "profile-cards"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    lg: 6
  }, /*#__PURE__*/_react.default.createElement(_profileCard.default, {
    data: {
      name: "Priya",
      portfolioUrl: "priyabihaniportfolio.firebaseapp.com",
      instaUrl: "https://www.instagram.com/bihani.priya",
      githubUrl: "https://www.github.com",
      twitterUrl: "https://www/twitter.com",
      bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora eveniet quae neque hic doloribus voluptatibus incidunt quia facilis blanditiis."
    }
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    lg: 6
  }, /*#__PURE__*/_react.default.createElement(_profileCard.default, {
    data: {
      name: "Kartik",
      portfolioUrl: "https://google.com",
      instaUrl: "https://www.instagram.com/gkartik18/",
      githubUrl: "https://www.github.com",
      twitterUrl: "https://www/twitter.com",
      bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora eveniet quae neque hic doloribus voluptatibus incidunt quia facilis blanditiis."
    }
  })))));
};

var _default = AboutUs;
exports.default = _default;