"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var ShareIcon = function ShareIcon(_ref) {
  var displayMode = _ref.displayMode,
      specaility = _ref.specaility,
      profile = _ref.profile;
  var width;
  var url;

  if (typeof window !== "undefined") {
    width = window.innerWidth;
    url = window.location.href;
    var position;

    if (width < 500) {
      position = "bottom";
    } else {
      position = "left";
    }

    var ShareIconUrl;

    if (displayMode === "light") {
      ShareIconUrl = "https://www.svgrepo.com/show/149246/share.svg";
    } else {
      ShareIconUrl = "https://www.svgrepo.com/show/241812/share.svg";
    }
  }

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      copied = _useState2[0],
      setCopied = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "share-overlay"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    trigger: "click",
    key: position,
    placement: position,
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Popover, {
      id: "popover-positioned-".concat(position)
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Popover.Content, {
      bsPrefix: "popover-body1"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "share-overlay-icons"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "https://api.whatsapp.com/send?text=Hey look i just found out this AmazingGuide on \"".concat(specaility, " and use my referral code '").concat(profile && profile.referCode, "' to SignUp \",Check it out : ").concat(url),
      target: "_blank",
      rel: "noopener noreferrer nofollow"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "https://www.svgrepo.com/show/303147/whatsapp-icon-logo.svg",
      alt: "share " + specaility + " on whatsapp"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "bottom",
      overlay: copied ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
        id: "tooltip-bottom"
      }, "Link Copied to ClipBoard") : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
        id: "tooltip-right"
      }, "Copy link to clipboard")
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: "link"
    }, /*#__PURE__*/_react.default.createElement(_reactCopyToClipboard.CopyToClipboard, {
      text: url,
      onCopy: function onCopy() {
        return setCopied({
          copied: true
        });
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "https://www.svgrepo.com/show/41990/clipboard.svg",
      alt: "copy " + specaility + " url"
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "mailto:?Subject=".concat("Learn" + specaility, "&Body=Hey look i just found out this Amazing guide on \"").concat(specaility, "\", use my referral code '").concat(profile && profile.referCode, "' to SignUp , check it out  ").concat(url),
      target: "_top",
      rel: "nofollow"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "https://www.svgrepo.com/show/303161/gmail-icon-logo.svg",
      alt: "share " + specaility + " on gmail"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "https://twitter.com/share?ref_src=twsrc%5Etfw",
      className: "twitter-share-button",
      "data-text": "Hey look I just found out this amazing Website to learn WebDevelopment, check it out",
      "data-show-count": "false",
      rel: "nofollow"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "https://www.svgrepo.com/show/20626/twitter.svg",
      alt: "share " + specaility + " on twitter"
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://platform.twitter.com/widgets.js",
      charSet: "utf-8"
    })))))
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "link"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: ShareIconUrl,
    className: "share-speciality-btn",
    alt: "share Articles on" + specaility
  }))));
};

var _default = ShareIcon;
exports.default = _default;