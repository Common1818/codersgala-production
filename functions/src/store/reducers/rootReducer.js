"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _authReducer = _interopRequireDefault(require("./authReducer"));

var _learningReducer = _interopRequireDefault(require("./learningReducer"));

var _redux = require("redux");

var _reduxFirestore = require("redux-firestore");

var _reactReduxFirebase = require("react-redux-firebase");

var _adminReducer = _interopRequireDefault(require("./adminReducer"));

var rootReducer = (0, _redux.combineReducers)({
  auth: _authReducer.default,
  learn: _learningReducer.default,
  admin: _adminReducer.default,
  firestore: _reduxFirestore.firestoreReducer,
  firebase: _reactReduxFirebase.firebaseReducer
});
var _default = rootReducer;
exports.default = _default;