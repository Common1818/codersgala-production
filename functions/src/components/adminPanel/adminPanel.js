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

var _reactHelmet = require("react-helmet");

var _authContext = require("../../contexts/authContext");

var _makeAdminForm = _interopRequireDefault(require("./makeAdminForm"));

var _userTable = _interopRequireDefault(require("./userTable"));

var firebase = require("firebase");

require("firebase/functions");

var AdminPanel = function AdminPanel() {
  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      isAdmin = _useContext.isAdmin;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      message = _useState4[0],
      setMessage = _useState4[1]; // Function to display all users


  var displayUsers = function displayUsers() {
    var functions = firebase.functions();
    var userList = functions.httpsCallable("userList");
    userList().then(function (res) {
      var message = res.data.message;
      setMessage(message);
      setUsers(res.data.users);
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, "Coders Gala - admin"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Coders Gala is a free platform to learn webdevelopment for free lancing"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "robots",
    content: "noindex nofollow"
  })), isAdmin ? /*#__PURE__*/_react.default.createElement("div", {
    className: "adminpanel-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "make-admin-form"
  }, /*#__PURE__*/_react.default.createElement(_makeAdminForm.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "users-table"
  }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "primary",
    onClick: displayUsers
  }, "get users"), " ", message ? /*#__PURE__*/_react.default.createElement("div", null, message) : null, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_userTable.default, {
    users: users
  }))) : null);
};

var _default = AdminPanel;
exports.default = _default;