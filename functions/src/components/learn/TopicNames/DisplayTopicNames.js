"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _AddTopicName = _interopRequireDefault(require("./AddTopicName"));

var _DeleteButton = _interopRequireDefault(require("../../layout/Button/DeleteButton"));

var _UpdateTopicName = _interopRequireDefault(require("./UpdateTopicName"));

var _lockedUnlockedTopics = _interopRequireDefault(require("../../referralSystem/lockedUnlockedTopics"));

var _authContext = require("../../../contexts/authContext");

var _jquery = _interopRequireDefault(require("jquery"));

var _add = _interopRequireDefault(require("./DisplayTopicNamesComp/add"));

var _article = _interopRequireDefault(require("./DisplayTopicNamesComp/article"));

var _homeContext = require("../../../contexts/homeContext");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DisplayTopicNames = function DisplayTopicNames(props) {
  var displayMode = props.displayMode,
      SpecialityId = props.SpecialityId,
      TopicNames = props.TopicNames,
      Articles = props.Articles,
      displayArticle = props.displayArticle,
      referralArticle = props.referralArticle;

  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      isAdmin = _useContext.isAdmin,
      authData = _useContext.authData;

  var _useContext2 = (0, _react.useContext)(_homeContext.HomeContext),
      home = _useContext2.home; // For dark mode
  // made a function that updates the state to re render the component
  //


  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      firstRender = _useState2[0],
      setFirstRender = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      unhideToggleId = _useState4[0],
      setUnhideToggleId = _useState4[1];

  var checkLocked = function checkLocked(topic) {
    //Check if the article is locked and show referral article. Unhide toggle is a condition to check if it is unlocked by user.
    if (topic.locked === true && unhideToggleId[topic.id] == null) {
      referralArticle(topic.id);
    }
  };

  var UnhideToggle = function UnhideToggle(id) {
    setUnhideToggleId(_objectSpread(_objectSpread({}, unhideToggleId), {}, (0, _defineProperty2.default)({}, id, true)));
  };

  var Arrow; // const Mode = localStorage.getItem("mode");

  if (firstRender) {
    authData.userProfile && authData.userProfile.UnlockedTopicId && authData.userProfile.UnlockedTopicId.map(function (id) {
      setUnhideToggleId(_objectSpread(_objectSpread({}, unhideToggleId), {}, (0, _defineProperty2.default)({}, id.id, true)));
    });
    setFirstRender(false);
  }

  var readArticle = function readArticle(article) {
    displayArticle(article);

    if (typeof window !== "undefined") {
      if (window.innerWidth <= 569) {
        console.log((0, _jquery.default)(".card-container").position());
        (0, _jquery.default)("html, body").animate({
          ScrollTop: 585
        }, 100);
      }
    }
  }; // const [Arrow, setArrow] = useState(
  //   "https://www.svgrepo.com/show/60060/down-arrow.svg"
  // );


  return /*#__PURE__*/_react.default.createElement("div", null, TopicNames && TopicNames.map(function (item) {
    if (SpecialityId === item.SpecialityId) {
      var _React$createElement;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "p-0 speciality-topic-container m-1",
        key: item.id,
        onClick: function onClick() {
          return checkLocked(item);
        }
      }, /*#__PURE__*/_react.default.createElement("h4", {
        className: "float-left topicName"
      }, item.Name), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, item.locked != true || unhideToggleId[item.id] != null ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Toggle, {
        as: _reactBootstrap.Button,
        variant: "link",
        className: "float-right arrow-down",
        eventKey: item.Name.split(/\s/).join("") // to remove spaces
        ,
        onClick: function onClick() {
          (0, _jquery.default)(".fa-angle-down#".concat(item.Name.split(/\s/).join(""))).toggleClass("rotate");
        }
      }, /*#__PURE__*/_react.default.createElement("svg", (_React$createElement = {
        id: item.Name.split(/\s/).join(""),
        viewBox: "0 0 32 32",
        className: " icon icon-chevron-bottom article-dwn article-toggle fa-angle-down"
      }, (0, _defineProperty2.default)(_React$createElement, "viewBox", "0 0 32 32"), (0, _defineProperty2.default)(_React$createElement, "aria-hidden", "true"), _React$createElement), /*#__PURE__*/_react.default.createElement("path", {
        d: "M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"
      }))) : /*#__PURE__*/_react.default.createElement(_lockedUnlockedTopics.default, {
        topic: item,
        unhideToggle: UnhideToggle
      }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "clearflex"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "float-right"
      }, isAdmin ? /*#__PURE__*/_react.default.createElement(_DeleteButton.default, {
        key: "del" + item.id,
        collectionName: "TopicNames",
        DocId: item.id,
        size: "small"
      }) : null), /*#__PURE__*/_react.default.createElement("div", {
        className: "clearflex"
      }), isAdmin ? /*#__PURE__*/_react.default.createElement("div", {
        className: "float-right"
      }, /*#__PURE__*/_react.default.createElement(_UpdateTopicName.default, {
        Topic: item
      })) : null, /*#__PURE__*/_react.default.createElement("div", {
        className: "clearflex"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "float-right"
      }, isAdmin ? /*#__PURE__*/_react.default.createElement(_add.default, {
        SpecialityId: item.SpecialityId,
        id: item.id,
        Name: item.Name
      }) : null)), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
        eventKey: item.Name.split(/\s/).join("")
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ol", null, Articles && Articles.map(function (article) {
        if (item.id == article.TopicId) {
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "read-icon",
            key: article.id
          }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_article.default, {
            displayMode: displayMode,
            readArticle: readArticle,
            article: article,
            item: item,
            isAdmin: isAdmin
          }));
        } else {
          return null;
        }
      }))))), /*#__PURE__*/_react.default.createElement("br", null));
    }
  }), isAdmin ? /*#__PURE__*/_react.default.createElement(_AddTopicName.default, {
    SpecialityId: SpecialityId
  }) : null);
};

var _default = DisplayTopicNames;
exports.default = _default;