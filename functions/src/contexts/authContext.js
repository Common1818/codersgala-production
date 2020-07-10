"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AuthContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _authReducer = require("../reducers/authReducer");

var _fbConfig = _interopRequireDefault(require("../config/fbConfig"));

/* eslint-disable */
// import { getProfile } from "../crudFunctions/authFunctions";
var AuthContext = (0, _react.createContext)();
exports.AuthContext = AuthContext;
var initState = {
  error: null,
  isReady: false
};

var AuthContextProvider = function AuthContextProvider(props) {
  var _useReducer = (0, _react.useReducer)(_authReducer.authReducer, initState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      authData = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      authState = _useState2[0],
      setAuthState = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isAdmin = _useState4[0],
      SetisAdmin = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      userProfile = _useState6[0],
      setUserProfile = _useState6[1]; // console.log(firebase.auth().currentUser.points);


  (0, _react.useEffect)(function () {
    _fbConfig.default.auth().onAuthStateChanged(function (user) {
      setAuthState(user);
      user && user.getIdTokenResult(true).then(function (idTokenResult) {
        var isAdmin = idTokenResult.claims.admin;
        SetisAdmin(isAdmin);
      }); // getProfile(dispatch);
    });
  });
  return /*#__PURE__*/_react.default.createElement(AuthContext.Provider, {
    value: {
      authData: authData,
      dispatch: dispatch,
      authState: authState,
      isAdmin: isAdmin,
      userProfile: userProfile
    }
  }, props.children);
};

var _default = AuthContextProvider;
exports.default = _default;