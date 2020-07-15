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

var _topicFunctions = require("../../../crudFunctions/topicFunctions");

var _topicContext = require("../../../contexts/topicContext");

/* eslint-disable */
var DeleteButton = function DeleteButton(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      Deleting = _useState2[0],
      setDeleting = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      Deleted = _useState4[0],
      setDeleted = _useState4[1];

  var collectionName = props.collectionName,
      DocId = props.DocId,
      size = props.size;

  var _useContext = (0, _react.useContext)(_topicContext.TopicsContext),
      dispatch = _useContext.dispatch;

  var handleDelete = function handleDelete(e) {
    e.preventDefault();
    var confirm = prompt("Are you Sure you want to delete? Type CONFIRM to proceed 😮");

    if (confirm === "CONFIRM") {
      setDeleting(true);
      (0, _topicFunctions.DeleteTopicFunction)(collectionName, DocId, dispatch);
    } else {
      window.alert("Item not DELETED");
    }
  };

  var width = window.innerWidth;
  var position;

  if (width < 500) {
    position = "bottom";
  } else {
    position = "right";
  }

  return /*#__PURE__*/_react.default.createElement("span", null, size === "small" ? /*#__PURE__*/_react.default.createElement("button", {
    className: "btn text-danger ",
    onClick: handleDelete
  }, Deleting && !Deleted ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Spinner, {
    animation: "border",
    role: "status"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Loading...")) : /*#__PURE__*/_react.default.createElement("svg", {
    className: "svg-icon del",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M7.083,8.25H5.917v7h1.167V8.25z M18.75,3h-5.834V1.25c0-0.323-0.262-0.583-0.582-0.583H7.667\r c-0.322,0-0.583,0.261-0.583,0.583V3H1.25C0.928,3,0.667,3.261,0.667,3.583c0,0.323,0.261,0.583,0.583,0.583h1.167v14\r c0,0.644,0.522,1.166,1.167,1.166h12.833c0.645,0,1.168-0.522,1.168-1.166v-14h1.166c0.322,0,0.584-0.261,0.584-0.583\r C19.334,3.261,19.072,3,18.75,3z M8.25,1.833h3.5V3h-3.5V1.833z M16.416,17.584c0,0.322-0.262,0.583-0.582,0.583H4.167\r c-0.322,0-0.583-0.261-0.583-0.583V4.167h12.833V17.584z M14.084,8.25h-1.168v7h1.168V8.25z M10.583,7.083H9.417v8.167h1.167V7.083\r z"
  }))) : /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-outline-danger btn-lg btn-block mr-3 mb-2 mt-2",
    onClick: handleDelete
  }, "Delete"));
};

var _default = DeleteButton;
exports.default = _default;