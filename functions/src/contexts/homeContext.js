"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HomeContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _homeReducer = require("../reducers/homeReducer");

var _homeFunctions = require("../crudFunctions/homeFunctions");

var HomeContext = (0, _react.createContext)();
exports.HomeContext = HomeContext;
var initState = {
  error: null
};
var mode = "light";

if (typeof window !== "undefined") {
  mode = localStorage.getItem("mode");
}

var HomeContextProvider = function HomeContextProvider(props) {
  var _useReducer = (0, _react.useReducer)(_homeReducer.homeReducer, initState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      home = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    (0, _homeFunctions.getHome)(dispatch);
  }, []);

  if (home && home.home) {
    console.log(home && home.home);
  }

  return /*#__PURE__*/_react.default.createElement(HomeContext.Provider, {
    value: {
      home: home,
      dispatch: dispatch,
      mode: mode
    }
  }, props.children);
};

var _default = HomeContextProvider;
exports.default = _default;