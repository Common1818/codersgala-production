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

var _reactBootstrap = require("react-bootstrap");

var _homeContext = require("../../../contexts/homeContext");

var _preloader = _interopRequireDefault(require("../../Preloader/preloader"));

var _homeFunctions = require("../../../crudFunctions/homeFunctions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EditHomepage = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(EditHomepage, _React$Component);

  var _super = _createSuper(EditHomepage);

  function EditHomepage() {
    var _this;

    (0, _classCallCheck2.default)(this, EditHomepage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      Loading: false
    };
    return _this;
  }

  (0, _createClass2.default)(EditHomepage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.context);
      var _this$context = this.context,
          home = _this$context.home,
          dispatch = _this$context.dispatch;
      var homeArray = home && home.home;
      var left = homeArray && homeArray[0].left;
      var middle = homeArray && homeArray[0].middle;
      var right = homeArray && homeArray[0].right;

      var handleSubmit = function handleSubmit(e) {
        e.preventDefault();

        _this2.setState({
          Loading: true
        });

        (0, _homeFunctions.UpdateHome)(_this2.state, dispatch);
      };

      var message = home && home.message;
      var color = home && home.color;
      var complete = home && home.homeLoaded; // const [Newleft, setNewleft] = useState("");
      // const [Newmiddle, setNewmiddle] = useState("");
      // const [Newright, setNewright] = useState("");
      // const handleSubmit = async () => {
      //   setNewleft(left);
      //   console.log(Newleft, Newmiddle, Newright);
      // };

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "home-container"
      }, homeArray ? /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("section", {
        className: "hero"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "hero-box-container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "hero-box"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "hero-box__circle hero-box__circle--blue"
      }), /*#__PURE__*/_react.default.createElement("h2", {
        className: "hero-box__title"
      }, "What is Coders Gala?"), /*#__PURE__*/_react.default.createElement("p", {
        className: "hero-box__body"
      }, /*#__PURE__*/_react.default.createElement("textarea", {
        defaultValue: left && left,
        id: "left",
        onChange: function onChange(e) {
          _this2.setState((0, _defineProperty2.default)({}, e.target.id, e.target.value));
        },
        style: {
          width: "100%",
          height: "200px"
        }
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "hero-box"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "hero-box__circle hero-box__circle--green"
      }), /*#__PURE__*/_react.default.createElement("h2", {
        className: "hero-box__title"
      }, "Who are We ?"), /*#__PURE__*/_react.default.createElement("p", {
        className: "hero-box__body"
      }, /*#__PURE__*/_react.default.createElement("textarea", {
        defaultValue: middle && middle,
        id: "middle",
        onChange: function onChange(e) {
          _this2.setState((0, _defineProperty2.default)({}, e.target.id, e.target.value));
        },
        style: {
          width: "100%",
          height: "200px"
        }
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "hero-box"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "hero-box__circle hero-box__circle--orange"
      }), /*#__PURE__*/_react.default.createElement("h2", {
        className: "hero-box__title"
      }, "Start Learning .."), /*#__PURE__*/_react.default.createElement("p", {
        className: "hero-box__body"
      }, /*#__PURE__*/_react.default.createElement("textarea", {
        defaultValue: right && right,
        onChange: function onChange(e) {
          _this2.setState((0, _defineProperty2.default)({}, e.target.id, e.target.value));
        },
        id: "right",
        style: {
          width: "100%",
          height: "200px"
        }
      }))))), /*#__PURE__*/_react.default.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
        onClick: handleSubmit
      }, "Update"), this.state.Loading && !complete ? /*#__PURE__*/_react.default.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Spinner, {
        animation: "border",
        role: "status"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "sr-only"
      }, "Loading..."))) : /*#__PURE__*/_react.default.createElement("div", {
        className: "text-center " + "text-" + color
      }, message))) : /*#__PURE__*/_react.default.createElement(_preloader.default, null));
    }
  }]);
  return EditHomepage;
}(_react.default.Component);

EditHomepage.contextType = _homeContext.HomeContext;
var _default = EditHomepage;
exports.default = _default;