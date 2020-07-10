"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fbConfig = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

var fbConfig = {
  apiKey: "AIzaSyCtDwp5-R_wP5shKC5n3addUtmzMDIP5SQ",
  authDomain: "codersgala.firebaseapp.com",
  databaseURL: "https://codersgala.firebaseio.com",
  projectId: "codersgala",
  storageBucket: "codersgala.appspot.com",
  messagingSenderId: "201431033087",
  appId: "1:201431033087:web:fb8584684521d84bfe18ca",
  measurementId: "G-NGKVQSKSC6"
}; // Initialize Firebase

exports.fbConfig = fbConfig;

_app.default.initializeApp(fbConfig);

_app.default.firestore();

var _default = _app.default;
exports.default = _default;