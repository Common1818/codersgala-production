"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = require("react-helmet");

var _jquery = _interopRequireDefault(require("jquery"));

var _authFunctions = require("../../crudFunctions/authFunctions");

var _authContext = require("../../contexts/authContext");

var SignIn = function SignIn() {
  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      dispatch = _useContext.dispatch,
      authState = _useContext.authState,
      authData = _useContext.authData;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    (0, _jquery.default)(".sign-in-section h1").addClass("changed");
    (0, _authFunctions.signIn)(email, password, dispatch);
  };

  var handleGoogleLogin = function handleGoogleLogin(e) {
    e.preventDefault();
    (0, _jquery.default)(".sign-in-section h1").addClass("changed");
    (0, _authFunctions.LoginWithGoogle)(dispatch);
  };

  var uid = authState && authState.uid;
  var status = authData.errorMessage;
  var loginCode = authData.loginCode;
  console.log(loginCode);

  if (loginCode === 100) {
    (0, _jquery.default)(".sign-in-section h1").removeClass("changed");
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  var dinText = "<Coders Gala/>";
  if (uid) return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: "/"
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "login-form-container"
  }, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, "Coders Gala-LogIn"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Coders Gala LogIn Page"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "robots",
    content: "index follow"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "login-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "login-form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-in-section"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "dinTag"
  }), /*#__PURE__*/_react.default.createElement("h1", null, "Log in"), /*#__PURE__*/_react.default.createElement("p", null, "Hey, Welcome Back !!"), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: function onChange(e) {
      setEmail(e.target.value);
    },
    type: "email",
    id: "email",
    className: "user-input",
    required: true,
    placeholder: "example@mail.com"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "htmlForm-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/_react.default.createElement("input", {
    required: true,
    onChange: function onChange(e) {
      setPassword(e.target.value);
    },
    type: "password",
    id: "password",
    className: "pass-input",
    placeholder: "*********"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-options"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "rememberMe"
  }, "Forgot Password?")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/signup"
  }, "SignUp")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    className: "btn btn-signin",
    value: "Submit"
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("h3", null, "OR")), /*#__PURE__*/_react.default.createElement("div", {
    onClick: handleGoogleLogin,
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "center"
    },
    className: "btn btn-signin"
  }, "Continue with", " ", /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "30px"
    },
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontWeight: "500"
    },
    className: "text-danger"
  }, status))))));
};

var _default = SignIn;
exports.default = _default;