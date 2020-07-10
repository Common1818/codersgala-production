"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ModeContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _modeReducer = require("../reducers/modeReducer");

var ModeContext = (0, _react.createContext)();
exports.ModeContext = ModeContext;
var mode = "light";

if (typeof window !== 'undefined') {
  mode = localStorage.getItem("mode");
}

var initState = {
  mode: mode
};

var ModeContextProvider = function ModeContextProvider(props) {
  var _useReducer = (0, _react.useReducer)(_modeReducer.modeReducer, initState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      mode = _useReducer2[0],
      dispatch = _useReducer2[1];

  return /*#__PURE__*/_react.default.createElement(ModeContext.Provider, {
    value: {
      mode: mode,
      dispatch: dispatch
    }
  }, props.children);
};

var _default = ModeContextProvider;
exports.default = _default;