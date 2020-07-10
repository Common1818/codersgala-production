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

var _reactRouterDom = require("react-router-dom");

var _authFunctions = require("../../crudFunctions/authFunctions");

var _authContext = require("../../contexts/authContext");

var CompleteProfile = function CompleteProfile() {
  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      authData = _useContext.authData,
      dispatch = _useContext.dispatch;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    (0, _jquery.default)(".sign-in-section h1").addClass("changed");
    console.log({
      firstName: firstName,
      lastName: lastName,
      age: age
    });
    (0, _authFunctions.updateProfile)({
      firstName: firstName,
      lastName: lastName,
      age: age
    }, dispatch);
  };

  var dinText = "<DoItNow/>";

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      firstName = _useState2[0],
      setFirstName = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      lastName = _useState4[0],
      setLastName = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      age = _useState6[0],
      setAge = _useState6[1];

  console.log(authData);
  var updateComplete = authData && authData.profileUpdateComplete;
  var hasUpdatedProfile = authData.userProfile && authData.userProfile.hasUpdatedProfile;
  console.log(updateComplete); // TO redirect if the profile is already updated

  if (hasUpdatedProfile === true) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
      to: "/"
    });
  }

  var message;

  if (updateComplete) {
    (0, _jquery.default)(".sign-in-section h1").removeClass("changed");
    message = "Profile updarted refresh page to continue";
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "login-form-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "login-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "login-form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-in-section"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "dinTag"
  }), /*#__PURE__*/_react.default.createElement("h1", null, "Update Your Profile"), /*#__PURE__*/_react.default.createElement("p", null, message ? message : "update your profile to continue !!"), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: function onChange(e) {
      setFirstName(e.target.value);
    },
    type: "text",
    placeholder: "First Name",
    id: "firstName",
    className: "form-control",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: function onChange(e) {
      setLastName(e.target.value);
    },
    type: "text",
    placeholder: "Last Name",
    id: "lastName",
    className: "form-control",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: function onChange(e) {
      setAge(e.target.value);
    },
    type: "number",
    placeholder: "Age",
    id: "age",
    className: "form-control",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    className: "btn btn-signin",
    value: "Submit"
  })))))));
};

var _default = CompleteProfile;
exports.default = _default;