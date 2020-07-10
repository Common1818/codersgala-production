"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var firebase = require("firebase");

require("firebase/functions");

var MakeAdmin = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(MakeAdmin, _Component);

  var _super = _createSuper(MakeAdmin);

  function MakeAdmin() {
    var _this;

    (0, _classCallCheck2.default)(this, MakeAdmin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      email: ''
    };

    _this.handleSubmit = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {
        var functions, addAdminRole;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log(_this.state);
                functions = firebase.functions();
                addAdminRole = functions.httpsCallable("addAdminRole");
                addAdminRole(_this.state).then(function (res) {
                  // call the function to set the state over here
                  console.log(res);
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleChange = function (e) {
      _this.setState((0, _defineProperty2.default)({}, e.target.id, e.target.value));
    };

    return _this;
  }

  (0, _createClass2.default)(MakeAdmin, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react.default.createElement("h5", null, "Make Admin"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "email"
      }, "Email Id:"), /*#__PURE__*/_react.default.createElement("input", {
        id: "email",
        onChange: this.handleChange,
        className: "form-control",
        type: "email"
      })), /*#__PURE__*/_react.default.createElement("button", {
        className: "btn btn-danger"
      }, "Make Admin")));
    }
  }]);
  return MakeAdmin;
}(_react.Component);

var _default = MakeAdmin;
exports.default = _default;