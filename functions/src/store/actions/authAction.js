"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.LoginWithGoogle = exports.signUp = exports.signIn = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var firebase = require("firebase");

var provider = new firebase.auth.GoogleAuthProvider();

var signIn = function signIn(credentials) {
  return function (dispatch, getState, _ref) {
    var getFirebase = _ref.getFirebase;
    var firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then(function () {
      console.log("logged in successfully");
    }).catch(function (err) {
      console.log("error logging in ");
    });
  };
};

exports.signIn = signIn;

var signUp = function signUp(newUser) {
  return /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(dispatch, getState, _ref2) {
      var getFirebase, getFirestore, firebase, firestore, initials, referCode, userArraySnapshot;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              getFirebase = _ref2.getFirebase, getFirestore = _ref2.getFirestore;
              firebase = getFirebase();
              firestore = getFirestore();
              initials = newUser.firstName[0] + newUser.lastName[0];
              referCode = initials + newUser.age + newUser.firstName[1] + newUser.lastName[1]; // Here, write code to check refer code is unique.
              // Checking and updating score according to the refercode entered by user

              if (!(newUser.codeReferred != null)) {
                _context2.next = 10;
                break;
              }

              _context2.next = 8;
              return firebase.firestore().collection('Users').get();

            case 8:
              userArraySnapshot = _context2.sent;
              userArraySnapshot.docs.map( /*#__PURE__*/function () {
                var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(doc) {
                  var data, points;
                  return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          data = doc.data();
                          points = data.points + 2;

                          if (!(data.referCode === newUser.codeReferred)) {
                            _context.next = 5;
                            break;
                          }

                          _context.next = 5;
                          return firestore.collection("Users").doc(doc.id).update({
                            points: points
                          });

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x4) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 10:
              firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then(function (res) {
                return firestore.collection("Users").doc(res.user.uid).set({
                  firstName: newUser.firstName,
                  lastName: newUser.lastName,
                  initials: initials,
                  age: newUser.age,
                  points: 0,
                  referCode: referCode
                });
              }).then(function () {
                dispatch({
                  type: "SIGNUP-SUCCESS"
                });
              }).catch(function (err) {
                dispatch({
                  type: "SIGNUP_ERROR",
                  err: err
                });
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x, _x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

exports.signUp = signUp;

var LoginWithGoogle = function LoginWithGoogle() {
  return function (dispatch, getState, _ref5) {
    var getFirebase = _ref5.getFirebase,
        getFirestore = _ref5.getFirestore;
    var firebase = getFirebase();
    var firestore = getFirestore();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log("login success");
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log("login error");
    });
  };
};

exports.LoginWithGoogle = LoginWithGoogle;

var signOut = function signOut() {
  return function (dispatch, getState, _ref6) {
    var getFirebase = _ref6.getFirebase;
    var firebase = getFirebase();
    firebase.auth().signOut().then(function () {
      console.log("logged out successfully");
    }).catch(function (err) {
      console.log(err, "error logging out ");
    });
  };
};

exports.signOut = signOut;