"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _topicContext = require("../../../contexts/topicContext");

var _reactBootstrap = require("react-bootstrap");

var _topicFunctions = require("../../../crudFunctions/topicFunctions");

var _jquery = _interopRequireDefault(require("jquery"));

/* eslint-disable */
var AddTopicName = function AddTopicName(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      locked = _useState2[0],
      setLocked = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      Name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      Loading = _useState6[0],
      setLoading = _useState6[1];

  var _useContext = (0, _react.useContext)(_topicContext.TopicsContext),
      dispatch = _useContext.dispatch;

  var _useContext2 = (0, _react.useContext)(_topicContext.TopicsContext),
      topics = _useContext2.topics;

  var message = topics && topics.message;
  var color = topics && topics.color;
  var complete = topics && topics.complete; // console.log(complete);

  if (complete) {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }

  var handleInput = function handleInput(e) {
    setName(e.target.value);
  };

  var handleAdd = function handleAdd(e) {
    e.preventDefault();
    setLoading(true);
    (0, _topicFunctions.AddTopic)({
      Name: Name,
      locked: locked,
      SpecialityId: props.SpecialityId
    }, dispatch); // this.props.AddTopicName("TopicNames", {
    //   ...this.state,
    //   SpecialityId: props.SpecialityId,
    // });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container m-0 p-0 "
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn button-outline btn-lg btn-block",
    "data-toggle": "modal",
    "data-target": "#exampleModal12"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Add Topic Name")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal fade",
    id: "exampleModal12",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
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
    id: "exampleModalLabel"
  }, "Add a Topic Name"), /*#__PURE__*/_react.default.createElement("button", {
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
    placeholder: "Name of the topic",
    className: "form-control",
    onChange: handleInput
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: "add-topic-modal lock-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      (0, _jquery.default)(".add-topic-modal .lock").toggleClass("unlocked");
      setLocked(!locked);
    },
    className: "lock"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn button-outline float-right m-3",
    onClick: handleAdd
  }, "Add"), Loading && !complete ? /*#__PURE__*/_react.default.createElement("div", {
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

var _default = AddTopicName;
exports.default = _default;