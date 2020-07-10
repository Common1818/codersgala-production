"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _jquery = _interopRequireDefault(require("jquery"));

var ShareArticle = function ShareArticle(_ref) {
  var NId = _ref.NId,
      url = _ref.url;
  var nnid = NId.replace(/\s/g, "-");
  var value = "https://codersgala.com/WebDevelopment/read/" + nnid;
  console.log(value);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      copied = _useState2[0],
      setCopied = _useState2[1];

  function actionToggle() {
    var action = (0, _jquery.default)(".action");
    action.toggleClass("active");
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    class: "action",
    onClick: actionToggle
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "25px"
    },
    src: "https://www.svgrepo.com/show/19199/share.svg",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, copied ? /*#__PURE__*/_react.default.createElement("article", {
    className: "copyto"
  }, "Copied to ") : /*#__PURE__*/_react.default.createElement("article", {
    className: "copyto"
  }, "Copy to"), /*#__PURE__*/_react.default.createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: value,
    onCopy: function onCopy() {
      return setCopied(true);
    }
  }, /*#__PURE__*/_react.default.createElement("img", (0, _defineProperty2.default)({
    alt: "copy link of " + NId,
    style: {
      width: "25px",
      marginLeft: "20px"
    },
    src: "https://www.svgrepo.com/show/30388/clipboard.svg"
  }, "alt", "")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "whatsapp-icon",
    rel: "noopener noreferrer",
    href: "https://api.whatsapp.com/send?text=Hey look i just found out this Amazing article on \"".concat(NId, "\",Check it out : ").concat(url),
    target: "_blank"
  }, "Share on", /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "25px",
      marginLeft: "20px"
    },
    src: "https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg",
    alt: "share " + NId + " on Whatsapp"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "mail-icon",
    href: "mailto:?Subject=".concat("Article on " + NId, "&Body=Hey look i just found out this Amazing article on \"").concat(NId, "\",Check it out : ").concat(url),
    target: "_top",
    rel: "nofollow"
  }, "Share on", /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "25px",
      marginLeft: "20px"
    },
    className: "share-image",
    src: "https://www.svgrepo.com/show/303161/gmail-icon-logo.svg",
    alt: "share " + NId + " on Gmail"
  }))))));
};

var _default = ShareArticle;
exports.default = _default;