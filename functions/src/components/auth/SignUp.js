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

var _authContext = require("../../contexts/authContext");

var _authFunctions = require("../../crudFunctions/authFunctions");

var _jquery = _interopRequireDefault(require("jquery"));

/* eslint-disable */
var SignUp = function SignUp(props) {
  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      firstName = _useState6[0],
      setFirstName = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      lastName = _useState8[0],
      setLastName = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      age = _useState10[0],
      setAge = _useState10[1];

  var _useState11 = (0, _react.useState)(""),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      codeReferred = _useState12[0],
      setCodeReferred = _useState12[1];

  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      authData = _useContext.authData,
      authState = _useContext.authState,
      dispatch = _useContext.dispatch;

  var uid = authState && authState.uid;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    (0, _jquery.default)(".sign-in-section h1").addClass("changed");
    (0, _authFunctions.signUp)({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      age: age,
      codeReferred: codeReferred
    }, dispatch);
  };

  var errorMessage = authData.errorMessage;
  var referCode = props.match.params.referCode;
  if (uid) return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: "/"
  });
  var dinText = "<Coders Gala/>";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "login-form-container"
  }, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, "Coders Gala - SignUp"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Coders Gala SignUp page."
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "login-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "login-form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-in-section"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "dinTag"
  }), /*#__PURE__*/_react.default.createElement("h1", null, "SignUp"), /*#__PURE__*/_react.default.createElement("p", null, "Hey, Welcome Back !!"), /*#__PURE__*/_react.default.createElement("form", {
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
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "firstName"
  }, "First Name"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: function onChange(e) {
      setFirstName(e.target.value);
    },
    type: "text",
    id: "lastName",
    className: "form-control",
    required: true,
    placeholder: "First Name"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "lastName"
  }, "Last Name"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: function onChange(e) {
      setLastName(e.target.value);
    },
    type: "text",
    id: "lastName",
    className: "form-control",
    required: true,
    placeholder: "Last Name"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "age"
  }, "Age"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: function onChange(e) {
      setAge(e.target.value);
    },
    type: "number",
    id: "age",
    className: "form-control",
    required: true,
    placeholder: "Age"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "codeReferred"
  }, "Refer Code"), referCode != null ? /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "codeReferred",
    defaultValue: referCode,
    className: "form-control",
    onChange: function onChange(e) {
      setCodeReferred(e.target.value);
    }
  }) : /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "codeReferred",
    className: "form-control",
    onChange: function onChange(e) {
      setCodeReferred(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-options"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "rememberMe"
  }, "Forgot Password?")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/login"
  }, "Login")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    className: "btn btn-signin",
    value: "Submit"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-danger text-center text-uppercase"
  }, errorMessage && errorMessage.message))))));
};

var _default = SignUp; // <div className="container">
//   <Helmet>
//     <title>DoItNow - SignUp</title>
//     <meta name="description" content="DoItNow SignUp page." />
//   </Helmet>
//   <form onSubmit={handleSubmit}>
//     <h5>Sign Up</h5>
//     <div className="form-group">
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         required
//         className="form-control"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         required
//         className="form-control"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="firstName">First Name</label>
//       <input
//         type="text"
//         id="firstName"
//         required
//         className="form-control"
//         onChange={(e) => {
//           setFirstName(e.target.value);
//         }}
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         type="text"
//         id="lastName"
//         required
//         className="form-control"
//         onChange={(e) => {
//           setLastName(e.target.value);
//         }}
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="age">Age</label>
//       <input
//         type="number"
//         id="age"
//         required
//         min="1"
//         max="100"
//         className="form-control"
//         onChange={(e) => {
//           setAge(e.target.value);
//         }}
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="codeReferred">Refer Code</label>
//       {referCode != null ? (
//         <input
//           type="text"
//           id="codeReferred"
//           defaultValue={referCode}
//           className="form-control"
//           onChange={(e) => {
//             setCodeReferred(e.target.value);
//           }}
//         />
//       ) : (
//         <input
//           type="text"
//           id="codeReferred"
//           className="form-control"
//           onChange={(e) => {
//             setCodeReferred(e.target.value);
//           }}
//         />
//       )}
//       <span className="help-block">Optional</span>
//     </div>
//     <div>
//       <button type="submit" className="btn btn-danger">
//         SignUp
//       </button>
//     </div>
//     <div className="text-danger text-center text-uppercase">
//       {authError ? <p>{authError}</p> : null}
//     </div>
//   </form>
// </div>;

exports.default = _default;