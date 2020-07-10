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

var _topicContext = require("../../../contexts/topicContext");

var _topicFunctions = require("../../../crudFunctions/topicFunctions");

/* eslint-disable */
var UpdateTopicName = function UpdateTopicName(props) {
  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      Name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      Loading = _useState4[0],
      setLoading = _useState4[1];

  var _useContext = (0, _react.useContext)(_topicContext.TopicsContext),
      dispatch = _useContext.dispatch;

  var _useContext2 = (0, _react.useContext)(_topicContext.TopicsContext),
      topics = _useContext2.topics;

  var message = topics && topics.message;
  var color = topics && topics.color;
  var complete = topics && topics.complete;

  if (complete) {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }

  var handleInput = function handleInput(e) {
    setName(e.target.value);
  };

  var handleUpdate = function handleUpdate(e) {
    e.preventDefault();
    setLoading(true);
    (0, _topicFunctions.UpdateTopic)({
      Name: Name,
      id: props.Topic.id
    }, dispatch); // this.props.updateTopicName("TopicNames", {
    // ...this.state,
    // id: this.props.Topic.id
    // });
  };

  var Topic = props.Topic; // console.log(Topic)

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container m-0 p-0 "
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn text-primary text-",
    "data-toggle": "modal",
    "data-target": "#" + Topic.id
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "svg-icon",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal fade",
    id: Topic.id,
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": Topic.id + "label",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog ",
    role: "document"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content newsletter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "modal-title title",
    id: Topic.id + "label"
  }, "Update Topic Name"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body content"
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "Name",
    className: "form-control",
    defaultValue: Topic.Name,
    onChange: handleInput
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-outline-primary float-right m-3",
    onClick: handleUpdate
  }, "Update"), Loading && !complete ? /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Spinner, {
    animation: "border",
    role: "status"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Loading..."))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center " + "text-" + color
  }, message))))))));
};

var _default = UpdateTopicName;
exports.default = _default;