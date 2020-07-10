"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SpecialityContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _specialityReducer = require("../reducers/specialityReducer");

var _specialityFunctions = require("../crudFunctions/specialityFunctions.js");

var SpecialityContext = (0, _react.createContext)();
exports.SpecialityContext = SpecialityContext;
var initState = {
  error: null
};

var SpecialityContextProvider = function SpecialityContextProvider(props) {
  var _useReducer = (0, _react.useReducer)(_specialityReducer.specialityReducer, initState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      specialities = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    (0, _specialityFunctions.getSpecialities)(dispatch);
  }, []);
  console.log(specialities);
  return /*#__PURE__*/_react.default.createElement(SpecialityContext.Provider, {
    value: {
      specialities: specialities,
      dispatch: dispatch
    }
  }, props.children);
};

var _default = SpecialityContextProvider;
exports.default = _default;