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

var _specialityContext = require("../../../contexts/specialityContext");

var _preloader = _interopRequireDefault(require("../../Preloader/preloader"));

var _specialityFunctions = require("../../../crudFunctions/specialityFunctions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AddCard = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AddCard, _React$Component);

  var _super = _createSuper(AddCard);

  function AddCard() {
    (0, _classCallCheck2.default)(this, AddCard);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(AddCard, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$context = this.context,
          specialities = _this$context.specialities,
          dispatch = _this$context.dispatch;
      var specialityArray = specialities && specialities.specialities; // const { specailaityId } = this.props.match.params;

      var message = specialities && specialities.message;
      var color = specialities && specialities.color;

      var handleSubmit = function handleSubmit(e) {
        e.preventDefault();
        (0, _specialityFunctions.AddCardFunction)(_this.state, dispatch); // UpdateCard({ ...this.state, id: specailaityId }, dispatch);
      };

      var handleEditor = function handleEditor(html) {
        _this.setState({
          ArticleContent: html
        });
      };

      var handleChange = function handleChange(e) {
        _this.setState((0, _defineProperty2.default)({}, e.target.id, e.target.value));
      };

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "container mt-4"
      }, specialityArray ? /*#__PURE__*/_react.default.createElement("form", {
        className: "mt-5"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        id: "Name",
        required: true,
        onChange: handleChange,
        placeholder: "Speciality Name",
        className: "form-control"
      }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
        required: true,
        type: "text",
        id: "imageUrl",
        onChange: handleChange,
        placeholder: "Image URL",
        className: "form-control"
      }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
        required: true,
        type: "text",
        id: "alt",
        onChange: handleChange,
        placeholder: "Image alt text",
        className: "form-control"
      }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
        className: "ql-snow"
      }, /*#__PURE__*/_react.default.createElement(_editor.default, {
        required: true,
        className: "ql-editor",
        handleEditor: handleEditor,
        defaultValue: ""
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "add-article-button"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "submit",
        onClick: handleSubmit,
        className: "btn btn-outline-primary m-3"
      }, "Add"), /*#__PURE__*/_react.default.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "text-center " + "text-" + color
      }, message && message))))) : /*#__PURE__*/_react.default.createElement(_preloader.default, null));
    }
  }]);
  return AddCard;
}(_react.default.Component);

AddCard.contextType = _specialityContext.SpecialityContext;
var _default = AddCard; //  {
//    this.state.Loading && !complete ? (
//      <div className="text-center">
//        <Spinner animation="border" role="status">
//          <span className="sr-only">Loading...</span>
//        </Spinner>
//      </div>
//    ) : (
//      <div className={"text-center " + "text-" + color}>{message}</div>
//    );
//  }

exports.default = _default;