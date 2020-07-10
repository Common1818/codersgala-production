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

var _editor = _interopRequireDefault(require("../../editor/editor"));

var _articleFunctions = require("../../../crudFunctions/articleFunctions");

var _jquery = _interopRequireDefault(require("jquery"));

var _articleContext = require("../../../contexts/articleContext");

/* eslint-disable */
var AddArticle = function AddArticle(props) {
  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      ArticleContent = _useState2[0],
      setArticleContent = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      ArticleName = _useState4[0],
      setArticleName = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      keywords = _useState6[0],
      setArticleKeywords = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      Loading = _useState8[0],
      setLoading = _useState8[1];

  var _props$match$params = props.match.params,
      SpecialityId = _props$match$params.SpecialityId,
      id = _props$match$params.id;

  var goToTop = function goToTop() {
    (0, _jquery.default)("html, body").animate({
      scrollTop: 10
    }, 600);
  };

  var _useContext = (0, _react.useContext)(_articleContext.ArticlesContext),
      dispatch = _useContext.dispatch;

  var _useContext2 = (0, _react.useContext)(_articleContext.ArticlesContext),
      articles = _useContext2.articles;

  var message = articles && articles.message;
  var color = articles && articles.color;
  var complete = articles && articles.complete;

  var handleEditor = function handleEditor(html) {
    setArticleContent(html);
  };

  var handleAdd = function handleAdd(e) {
    e.preventDefault();
    setLoading(true);
    (0, _articleFunctions.addArticle)({
      ArticleContent: ArticleContent,
      ArticleName: ArticleName,
      SpecialityId: SpecialityId,
      TopicId: id,
      keywords: keywords
    }, dispatch);
  };

  if (complete) {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  } // console.log(this.props);


  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "full-view-article p-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "share-icons"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: 1
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    id: "top",
    sm: 10
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "",
    id: ""
  }, "Add a Article")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body content"
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "ArticleName",
    placeholder: "Article Name",
    className: "form-control",
    onChange: function onChange(e) {
      setArticleName(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "keywords",
    placeholder: "Article Description",
    className: "form-control",
    onChange: function onChange(e) {
      setArticleKeywords(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_editor.default, {
    handleEditor: handleEditor,
    defaultValue: ""
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "add-article-button"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-outline-primary m-3",
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
  }, message)))))), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    onClick: goToTop,
    rel: "nofollow",
    id: "go-to-top",
    className: " top-icon fas fa-angle-double-up"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: 1
  }));
};

var _default = AddArticle;
exports.default = _default;