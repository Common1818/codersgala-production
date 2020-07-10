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

var firebase = require("firebase");

require("firebase/functions");

var MakeAdminForm = function MakeAdminForm() {
  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var functions = firebase.functions();
    var addAdminRole = functions.httpsCallable("addAdminRole");
    addAdminRole(email).then(function (res) {
      var message = res.data.message;
      setMessage(message);
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    controlId: "formBasicPassword"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Make Admin"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "email",
    placeholder: "Enter E-mail to grant admin privileges",
    onChange: function onChange(e) {
      setEmail(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "danger",
    type: "submit"
  }, "Make Admin"), message ? /*#__PURE__*/_react.default.createElement("div", null, message) : null));
};

var _default = MakeAdminForm;
exports.default = _default;