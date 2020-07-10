"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

var _reactRouterDom = require("react-router-dom");

var PreviewArticle = function PreviewArticle(_ref) {
  var TopicNames = _ref.TopicNames,
      SelectedArticle = _ref.SelectedArticle,
      specialityName = _ref.specialityName;
  var slicedArticle = SelectedArticle.ArticleName;
  console.log(slicedArticle.replace(/\s/g, "-"));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", null, TopicNames && SelectedArticle && TopicNames.map(function (item) {
    if (item.id === SelectedArticle.TopicId) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: item.id
      }, /*#__PURE__*/_react.default.createElement("h1", {
        className: "material-icons  card-header"
      }, SelectedArticle.ArticleName, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
        className: "float-right"
      }, item.Name))), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("div", {
        className: "preview-card"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ql-snow"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "card-no-body ql-editor ",
        dangerouslySetInnerHTML: {
          __html: SelectedArticle.ArticleContent
        }
      }))));
    }

    return null;
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    onClick: function onClick() {
      (0, _jquery.default)("html, body").animate({
        scrollTop: 10
      }, 200);
    },
    to: "/" + specialityName + "/" + "read" + "/" + slicedArticle.replace(/\s/g, "-")
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "link"
  }, "Read More....."))));
};

var _default = PreviewArticle;
exports.default = _default;