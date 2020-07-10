"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specialityReducer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var specialityReducer = function specialityReducer(state, action) {
  switch (action.type) {
    // case "ADD_COURSE":
    //     return {
    //         ...state,
    //         errorCode: action.errorCode,
    //     };
    case "FETCH_SPECIALITIES":
      return _objectSpread(_objectSpread({}, state), {}, {
        specialities: action.specialitites
      });

    case "UPDATE_CARD":
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.message,
        color: action.color,
        complete: action.complete
      });

    case "ADD_CARD":
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.message,
        color: action.color,
        complete: action.complete
      });
    // case "EDIT_COURSE":
    //     return {
    //         ...state,
    //         error: action.error,
    //         errorCode: action.errorCode,
    //     };
    // case "DELETE_COURSE":
    //     return {
    //         ...state,
    //         errorCode: action.errCode,
    //     };
    // case "ADD_COURSE_VIDEO":
    //     return {
    //         ...state,
    //         errorCode: action.errorCode,
    //     };
    // case "ADD_COURSE_TOPIC":
    //     return {
    //         ...state,
    //         errorCode: action.errorCode,
    //     };

    default:
      return state;
  }
};

exports.specialityReducer = specialityReducer;