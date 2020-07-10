"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _editor = _interopRequireDefault(require("../../editor/editor"));

var _articleContext = require("../../../contexts/articleContext");

var _preloader = _interopRequireDefault(require("../../Preloader/preloader"));

var _articleFunctions = require("../../../crudFunctions/articleFunctions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var UpdateArticle = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(UpdateArticle, _React$Component);

  var _super = _createSuper(UpdateArticle);

  function UpdateArticle() {
    var _this;

    (0, _classCallCheck2.default)(this, UpdateArticle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(UpdateArticle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$context = this.context,
          articles = _this$context.articles,
          dispatch = _this$context.dispatch;
      var articleArray = articles && articles.articles;
      var _this$props$match$par = this.props.match.params,
          SpecialityId = _this$props$match$par.SpecialityId,
          TopicId = _this$props$match$par.TopicId,
          ArticleId = _this$props$match$par.ArticleId;
      var heading, content;
      var message = articles && articles.message;
      var color = articles && articles.color; // const complete = articles && articles.loaded;

      articleArray && articleArray.map(function (article) {
        if (article.id === ArticleId) {
          content = article.ArticleContent;
          heading = article.ArticleName;
        }

        return null;
      });

      var handleSubmit = function handleSubmit(e) {
        e.preventDefault();
        (0, _articleFunctions.UpdateArticleFunction)(_objectSpread(_objectSpread({}, _this2.state), {}, {
          SpecialityId: SpecialityId,
          TopicId: TopicId
        }), ArticleId, dispatch);
      };

      var handleEditor = function handleEditor(html) {
        _this2.setState({
          ArticleContent: html
        });
      };

      var handleChange = function handleChange(e) {
        _this2.setState((0, _defineProperty2.default)({}, e.target.id, e.target.value));
      };

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "container mt-4"
      }, articleArray ? /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        id: "ArticleName",
        defaultValue: heading,
        onChange: handleChange,
        placeholder: "Topic Name",
        className: "form-control"
      }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
        className: "ql-snow"
      }, " ", /*#__PURE__*/_react.default.createElement(_editor.default, {
        defaultValue: content,
        className: "ql-editor",
        handleEditor: handleEditor
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "add-article-button"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "submit",
        onClick: handleSubmit,
        className: "btn btn-outline-primary m-3"
      }, "Add"), /*#__PURE__*/_react.default.createElement("div", {
        className: "text-center " + "text-" + color
      }, message && message)))) : /*#__PURE__*/_react.default.createElement(_preloader.default, null));
    }
  }]);
  return UpdateArticle;
}(_react.default.Component);

UpdateArticle.contextType = _articleContext.ArticlesContext;
var _default = UpdateArticle;
exports.default = _default;