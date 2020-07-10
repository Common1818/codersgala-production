"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var _jquery = _interopRequireDefault(require("jquery"));

var _authContext = require("../../../contexts/authContext");

var _DeleteButton = _interopRequireDefault(require("../../layout/Button/DeleteButton"));

var _button = _interopRequireDefault(require("../../layout/Button/button"));

var Card = function Card(props) {
  (0, _react.useEffect)(function () {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 600) {
        (0, _jquery.default)(".container .card .contentBx").css("height", "150px");
      }
    }
  });
  var learningCards = props.learningCards;

  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      isAdmin = _useContext.isAdmin;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "learn-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container pt-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, learningCards && learningCards.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.id,
      className: "col-lg-6"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "imgBx"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "image",
      src: item.imageUrl,
      alt: item.alt
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "contentBx"
    }, /*#__PURE__*/_react.default.createElement("h2", null, " ", item.Name), isAdmin ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
      to: "/updatespeciality/" + item.id,
      rel: "nofollow"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "https://www.svgrepo.com/show/241804/edit.svg",
      style: {
        width: "20px"
      },
      alt: "edit" + item.Name
    })), /*#__PURE__*/_react.default.createElement(_DeleteButton.default, {
      collectionName: "Specialities",
      DocId: item.id,
      size: "small"
    }))) : null, /*#__PURE__*/_react.default.createElement("a", {
      href: "/learn/" + item.Name
    }, /*#__PURE__*/_react.default.createElement(_button.default, {
      buttonText: "Start Now"
    })))));
  }))));
};

var _default = Card;
exports.default = _default;