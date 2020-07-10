"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var ProfileCard = function ProfileCard(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement("aside", {
    className: "profile-card"
  }, /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h1", null, data.name), /*#__PURE__*/_react.default.createElement("h2", null, "Hello!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "profile-bio"
  }, /*#__PURE__*/_react.default.createElement("p", null, data.bio), /*#__PURE__*/_react.default.createElement("ul", {
    className: "social-icons list-unstyled list-inline"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    target: "__blank",
    href: data.portfolioUrl
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "25px"
    },
    src: "https://www.svgrepo.com/show/188990/browser-website.svg",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    target: "__blank",
    href: data.instaUrl
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "25px"
    },
    src: "https://www.svgrepo.com/show/111199/instagram.svg",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    target: "__blank",
    href: data.twitterUrl
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "25px"
    },
    src: "https://www.svgrepo.com/show/183608/twitter.svg",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    target: "__blank",
    href: data.githubUrl
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "25px"
    },
    src: "https://www.svgrepo.com/show/217753/github.svg",
    className: "github",
    alt: ""
  }))))));
};

var _default = ProfileCard;
exports.default = _default;