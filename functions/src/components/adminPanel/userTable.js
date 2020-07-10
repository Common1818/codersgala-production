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

var functions = firebase.functions();

var UserTable = function UserTable(_ref) {
  var users = _ref.users;

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "status-message"
  }, /*#__PURE__*/_react.default.createElement("div", null, message ? /*#__PURE__*/_react.default.createElement("div", null, message) : null)), users ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Table, {
    striped: true,
    bordered: true,
    hover: true,
    size: "sm"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "#"), /*#__PURE__*/_react.default.createElement("th", null, "Display Name"), /*#__PURE__*/_react.default.createElement("th", null, "Email"), /*#__PURE__*/_react.default.createElement("th", null, "Actions"))), /*#__PURE__*/_react.default.createElement("tbody", null, users && users.map(function (user) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: user.email
    }, /*#__PURE__*/_react.default.createElement("td", null, users.indexOf(user) + 1), /*#__PURE__*/_react.default.createElement("td", null, user.displayName), /*#__PURE__*/_react.default.createElement("td", null, user.email), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      onClick: function onClick() {
        var deleteUser = functions.httpsCallable("deleteUser");
        deleteUser(user.uid).then(function (res) {
          setMessage(" User ".concat(user.displayName, " was ").concat(res.data.message));
        });
      },
      variant: "danger"
    }, "Delete User"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      onClick: function onClick() {
        var unblockUser = functions.httpsCallable("unblockUser");
        unblockUser(user.uid).then(function (res) {
          setMessage(" User ".concat(user.displayName, " was ").concat(res.data.message));
        });
      },
      variant: "success"
    }, "UnBlock User"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      onClick: function onClick() {
        var blockUser = functions.httpsCallable("blockUser");
        blockUser(user.uid).then(function (res) {
          setMessage(" User ".concat(user.displayName, " was ").concat(res.data.message));
        });
      },
      variant: "warning"
    }, "Block User"))));
  }))) : null);
};

var _default = UserTable;
exports.default = _default;