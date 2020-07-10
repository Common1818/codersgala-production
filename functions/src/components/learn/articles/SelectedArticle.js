"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = require("react-helmet");

var _articleContext = require("../../../contexts/articleContext");

var _topicContext = require("../../../contexts/topicContext");

var _authContext = require("../../../contexts/authContext");

var _jquery = _interopRequireDefault(require("jquery"));

var _Footer = _interopRequireDefault(require("../../layout/Footer/Footer"));

var _shareArticle = _interopRequireDefault(require("./shareArticle"));

/* eslint-disable */
var SelectedArticle = function SelectedArticle(props) {
  var articles = props.articles;
  var value;

  if (typeof window !== "undefined") {
    var _useState = (0, _react.useState)(window.location.href),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        _value = _useState2[0],
        setValue = _useState2[1];
  }

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      copied = _useState4[0],
      setCopied = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      show = _useState6[0],
      setShow = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      locked = _useState8[0],
      setLocked = _useState8[1]; // const { articles } = useContext(ArticlesContext);


  var _useContext = (0, _react.useContext)(_authContext.AuthContext),
      authState = _useContext.authState,
      authData = _useContext.authData;

  var _useContext2 = (0, _react.useContext)(_topicContext.TopicsContext),
      topics = _useContext2.topics; // const Articles = articles && articles.articles;


  var _props$match$params = props.match.params,
      specialityId = _props$match$params.specialityId,
      topicId = _props$match$params.topicId,
      Id = _props$match$params.Id;
  console.log(Id);
  console.log(Id.replace(/-/g, " "));
  var NId = Id.replace(/-/g, " ");
  var url;

  if (typeof window !== "undefined") {
    url = window.location.href;
  }

  var goToTop = function goToTop() {
    (0, _jquery.default)("html, body").animate({
      scrollTop: 10
    }, 200);
  };

  topics.topics && authData.userProfile && topics.topics.map(function (item) {
    if (item.id == topicId && item.locked) {
      setLocked(true);
      authState.uid == null ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
        to: "/signup"
      }) : authData.userProfile.UnlockedTopicId.map(function (idItem) {
        if (idItem == topicId) setShow(true);
      });
    }
  }); // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     $(window).scroll(() => {
  //       console.log("scroll");
  //     });
  //   }
  // });
  // Add React Helmet Regardless of locked since its already taken care of

  return !locked || locked && show ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "selected-article"
  }, articles && articles.map(function (article) {
    if (article.ArticleName === NId) {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, article.ArticleName), /*#__PURE__*/_react.default.createElement("meta", {
        name: "description",
        content: article.keywords
      }), /*#__PURE__*/_react.default.createElement("meta", {
        name: "robots",
        content: "index follow"
      })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
        key: article.id,
        className: "full-view-article p-2"
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        sm: 2
      }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        id: "top",
        style: {
          padding: "0px"
        },
        sm: 8
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ql-snow"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "full-article ql-editor",
        dangerouslySetInnerHTML: {
          __html: article.ArticleContent
        }
      })), /*#__PURE__*/_react.default.createElement("a", {
        rel: "nofollow",
        href: "#"
      }, /*#__PURE__*/_react.default.createElement("img", {
        onClick: goToTop,
        className: "top-icon",
        id: "go-to-top",
        style: {
          width: "30px"
        },
        src: "https://www.svgrepo.com/show/247787/up-arrow-upload.svg",
        alt: "Go on Top of " + article.ArticleName
      }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        className: "full-page ad",
        sm: 2
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "https://res.cloudinary.com/css-tricks/image/fetch/w_600,q_auto,f_auto/https://cdn4.buysellads.net/uu/7/66572/1590680720-CSS_arcade_600x600.jpg",
        alt: ""
      }))));
    }

    return null;
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/learn/" + specialityId
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "back-btn",
    src: "https://www.svgrepo.com/show/50213/back.svg",
    alt: "back button"
  })), /*#__PURE__*/_react.default.createElement(_shareArticle.default, {
    NId: NId,
    url: url
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, null)) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: "/signup"
  });
};

var _default = SelectedArticle;
exports.default = _default;