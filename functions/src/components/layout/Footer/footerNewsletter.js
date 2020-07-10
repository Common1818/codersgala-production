"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

/* eslint-disable */
require("firebase/functions");

var FooterNewsletterForm = function FooterNewsletterForm() {
  var url = "https://script.google.com/macros/s/AKfycbzqvgKzk3xx20JNS26szIIyJNI3FllBJRhOoQ4IY0fBEqLwU1_9/exec";

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0, _react.useState)("Enter Your Email here to subscribe for Newsletter"),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      message = _useState4[0],
      setMessage = _useState4[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    (0, _jquery.default)(".border").addClass("anim");

    var jqxhr = _jquery.default.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: (0, _jquery.default)("form").serialize()
    }).then(function () {
      (0, _jquery.default)(".border").removeClass("anim");
      setMessage("YAY!! you'll now receive Coders Gala updates");
    }).catch(function (err) {
      (0, _jquery.default)(".border").removeClass("anim");
      setMessage("Error subsribing for newsletter");
    });
  };

  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dateObj = new Date();
  var month = monthNames[dateObj.getMonth()];
  var day = String(dateObj.getDate()).padStart(2, "0");
  var year = dateObj.getFullYear();
  var output = day + " " + month + "," + year;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "right-col"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Our Newsletter"), /*#__PURE__*/_react.default.createElement("div", {
    className: "border"
  }), /*#__PURE__*/_react.default.createElement("p", null, message), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit,
    className: " form newsletter-form"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    value: email,
    onChange: function onChange(e) {
      setEmail(e.target.value);
    },
    name: "Email",
    className: "txtb",
    placeholder: "Enter Your Email"
  }), /*#__PURE__*/_react.default.createElement("input", {
    style: {
      visibility: "hidden"
    },
    defaultValue: output,
    type: "text",
    name: "Date"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    value: "submit",
    className: "btn"
  })));
};

var _default = FooterNewsletterForm;
exports.default = _default;