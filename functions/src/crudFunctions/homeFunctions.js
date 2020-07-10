"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateHome = exports.getHome = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fbConfig = _interopRequireDefault(require("../config/fbConfig"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getHome = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(dispatch) {
    var HomeArray, HomeArraySnapshot;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            HomeArray = [];
            _context.next = 3;
            return _fbConfig.default.firestore().collection("Home").get();

          case 3:
            HomeArraySnapshot = _context.sent;
            HomeArraySnapshot.docs.map(function (doc) {
              HomeArray.push(_objectSpread({
                id: doc.id
              }, doc.data()));
              return null;
            });
            dispatch({
              type: "FETCH_HOME",
              home: HomeArray
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getHome(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getHome = getHome;

var UpdateHome = function UpdateHome(state, dispatch) {
  _fbConfig.default.firestore().collection("Home").doc("HomeBottom").update(_objectSpread({}, state)).then(function () {
    dispatch({
      type: "UPDATE_HOME",
      message: "Updated Home Successfully",
      color: "success"
    });
  }).catch(function (err) {
    dispatch({
      type: "UPDATE_HOME",
      message: "Error Updating Home",
      color: "danger"
    });
  });
};

exports.UpdateHome = UpdateHome;