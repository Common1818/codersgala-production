"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var authReducer = function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return _objectSpread(_objectSpread({}, state), {}, {
        loginCode: action.loginCode,
        errorMessage: action.errorMessage,
        isReady: true
      });

    case "LOGIN_GOOGLE":
      return _objectSpread(_objectSpread({}, state), {}, {
        loginCode: action.loginCode,
        errorMessage: action.errorMessage,
        isReady: true,
        reloadPage: 100
      });

    case "LOGOUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        loginCode: action.loginCode,
        loginError: action.loginError
      });

    case "SIGN_UP":
      return _objectSpread(_objectSpread({}, state), {}, {
        loginCode: action.loginCode,
        errorMessage: action.errorMessage
      });

    case "PASSWORD_RESET":
      return _objectSpread(_objectSpread({}, state), {}, {
        ResetMessage: action.ResetMessage
      });

    case "GET_PROFILE":
      return _objectSpread(_objectSpread({}, state), {}, {
        userProfile: action.profile
      });

    case "GET_PROFILE_ERROR":
      return _objectSpread(_objectSpread({}, state), {}, {
        userProfile: action.profile
      });

    case "PROFILE_UPDATE":
      return _objectSpread(_objectSpread({}, state), {}, {
        profileUpdateComplete: action.profileUpdateComplete
      });

    default:
      return state;
  }
};

exports.authReducer = authReducer;