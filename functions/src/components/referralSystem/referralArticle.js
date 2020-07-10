"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

var _referralFunctions = require("../../crudFunctions/referralFunctions");

var _authContext = require("../../contexts/authContext");

var _topicContext = require("../../contexts/topicContext");

var _jquery = _interopRequireDefault(require("jquery"));

var ReferralArticle = function ReferralArticle(_ref) {
  var topicId = _ref.topicId,
      hideReferralArticle = _ref.hideReferralArticle;

  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      authData = _useContext.authData,
      authState = _useContext.authState;

  var _useContext2 = (0, _react.useContext)(_topicContext.TopicsContext),
      dispatch = _useContext2.dispatch;

  var credentials = authData && authData.userProfile;
  var uid = authState && authState.uid;

  var runFunctions = function runFunctions() {
    (0, _jquery.default)(".lock#".concat(topicId)).toggleClass("unlocked");
    (0, _referralFunctions.unlockTopic)(topicId, uid, dispatch);
    hideReferralArticle();
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "material-icons card-header"
  }, "Referral Article"), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-no-body"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolorum architecto optio earum. Architecto dolor ullam mollitia atque natus? Qui velit nesciunt optio perspiciatis, blanditiis harum vero tempore voluptates quae quod beatae sint iste assumenda, vel dicta, necessitatibus voluptatibus molest", /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("div", null, uid ? credentials ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "Your refer code is : "), credentials.referCode)), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "Your refer Link is: "), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/signup/" + credentials.referCode
  }, "http://localhost:3000/signup/", credentials.referCode)), /*#__PURE__*/_react.default.createElement("div", null, credentials.points > 0 ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    varient: "primary",
    onClick: runFunctions
  }, "Unlock the article") : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    varient: "primary",
    disabled: true
  }, "Unlock the article")))) : null : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "Sign up to get your refer code then start referring and earn points"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/signup",
    className: "btn btn-primary"
  }, "Sign Up"))))));
};

var _default = ReferralArticle;
exports.default = _default;