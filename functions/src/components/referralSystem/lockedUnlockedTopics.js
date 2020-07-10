"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _authContext = require("../../contexts/authContext");

var LockedUnlockedTopic = function LockedUnlockedTopic(_ref) {
  var topic = _ref.topic,
      unhideToggle = _ref.unhideToggle;

  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      authData = _useContext.authData;

  var credentials = authData && authData.userProfile; // console.log(authData);

  return /*#__PURE__*/_react.default.createElement("div", null, topic.locked ? /*#__PURE__*/_react.default.createElement("div", null, credentials ? credentials.UnlockedTopicId && credentials.UnlockedTopicId.length === 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "float-right",
    key: topic.id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "lock-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "lock",
    id: topic.id
  }))) : credentials.UnlockedTopicId && credentials.UnlockedTopicId.map(function (id, i) {
    return topic.id === id.id ? /*#__PURE__*/_react.default.createElement("div", {
      className: "float-right",
      key: topic.id + id.id,
      onClick: unhideToggle(topic.id)
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "lock-container"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "unlocked"
    }))) : i === credentials.UnlockedTopicId.length - 1 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "float-right",
      key: topic.id + id.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "lock-container"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "lock",
      id: topic.id
    }))) : null;
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "float-right",
    key: topic.id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "lock-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "lock",
    id: topic.id
  })))) : null);
};

var _default = LockedUnlockedTopic;
exports.default = _default;