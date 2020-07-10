"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSubscriber = exports.updateProfile = exports.LoginWithGoogle = exports.signOut = exports.signUp = exports.getProfile = exports.signIn = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var firebase = require("firebase");

var provider = new firebase.auth.GoogleAuthProvider();

require("firebase/functions");

var signIn = function signIn(email, password, dispatch) {
  firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
    dispatch({
      type: "LOGIN",
      loginCode: 200,
      errorMessage: null
    });
  }).catch(function (err) {
    dispatch({
      type: "LOGIN",
      loginCode: 100,
      errorMessage: "Error Logging In"
    });
  });
};

exports.signIn = signIn;

var getProfile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(dispatch) {
    var uid, docRef;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            uid = firebase.auth().currentUser && firebase.auth().currentUser.uid;

            if (uid) {
              docRef = firebase.firestore().collection("Users").doc(uid);
              docRef.get().then(function (doc) {
                dispatch({
                  type: "GET_PROFILE",
                  profile: doc.data()
                });
              }).catch(function (error) {// console.log("Error getting document:", error);
              });
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getProfile(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProfile = getProfile;

var signUp = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(newUser, dispatch) {
    var initials, randomNumber, notSoRandom, referCode, userArraySnapshot;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            initials = newUser.firstName[0] + newUser.lastName[0];
            randomNumber = Math.floor(Math.random() * (90 - 65 + 1) + 65);
            notSoRandom = randomNumber + newUser.lastName.length;
            referCode = initials + newUser.age + newUser.firstName[1] + newUser.firstName.length + newUser.lastName[1] + notSoRandom + String.fromCharCode(randomNumber); // Checking and updating score according to the refercode entered by user

            if (!(newUser.codeReferred != null)) {
              _context3.next = 9;
              break;
            }

            _context3.next = 7;
            return firebase.firestore().collection("Users").get();

          case 7:
            userArraySnapshot = _context3.sent;
            userArraySnapshot.docs.map( /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(doc) {
                var data, points;
                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        data = doc.data();
                        points = data.points + 2;

                        if (!(data.referCode === newUser.codeReferred)) {
                          _context2.next = 6;
                          break;
                        }

                        console.log("match");
                        _context2.next = 6;
                        return firebase.firestore().collection("Users").doc(doc.id).update({
                          points: points
                        });

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x4) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 9:
            firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then(function (res) {
              return firebase.firestore().collection("Users").doc(res.user.uid).set({
                UnlockedTopicId: [],
                hasUpdatedProfile: true,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: initials,
                age: newUser.age,
                points: 0,
                referCode: referCode
              });
            }).then(function () {
              var user = firebase.auth().currentUser;
              user.updateProfile({
                displayName: newUser.firstName + " " + newUser.lastName
              });
              dispatch({
                type: "SIGN_UP",
                loginCode: 200,
                errorMessage: null
              });
            }).catch(function (err) {
              dispatch({
                type: "SIGN_UP",
                loginCode: 200,
                errorMessage: err
              });
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function signUp(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signOut = function signOut(dispatch) {
  firebase.auth().signOut().then(function () {
    dispatch({
      type: "LOGOUT",
      loginCode: 100
    });
  }).catch(function (err) {
    dispatch({
      type: "LOGOUT",
      loginError: "Error Logging In"
    });
  });
};

exports.signOut = signOut;

var LoginWithGoogle = function LoginWithGoogle(dispatch) {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    var currentUser = firebase.auth().currentUser;
    console.log(currentUser);
    var docRef = firebase.firestore().collection("Users").doc(currentUser.uid);
    console.log(docRef);
    docRef.get().then(function (doc) {
      if (doc.exists) {
        console.log("user already exists, Skipping doc creation");
      } else {
        docRef.set({
          hasUpdatedProfile: false,
          UnlockedTopicId: [],
          points: 0
        });
        console.log("doc created");
      }
    }).then(function () {
      dispatch({
        type: "LOGIN_GOOGLE",
        loginCode: 200,
        errorMessage: null
      });
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }).catch(function (error) {
    dispatch({
      type: "LOGIN",
      loginCode: 100,
      errorMessage: "Error Logging In"
    });
  });
};

exports.LoginWithGoogle = LoginWithGoogle;

var updateProfile = function updateProfile(profile, dispatch) {
  var initials = profile.firstName[0] + profile.lastName[0];
  var randomNumber = Math.floor(Math.random() * (90 - 65 + 1) + 65);
  var notSoRandom = randomNumber + profile.lastName.length;
  var uid = firebase.auth().currentUser && firebase.auth().currentUser.uid;
  var referCode = initials + profile.age + profile.firstName[1] + profile.firstName.length + profile.lastName[1] + notSoRandom + String.fromCharCode(randomNumber);
  firebase.firestore().collection("Users").doc(uid).update({
    UnlockedTopicId: [],
    hasUpdatedProfile: true,
    firstName: profile.firstName,
    lastName: profile.lastName,
    initials: initials,
    age: profile.age,
    referCode: referCode
  }).then(function () {
    dispatch({
      type: "PROFILE_UPDATE",
      profileUpdateComplete: true
    });
  }).catch(function (error) {
    console.log(error);
  });
};

exports.updateProfile = updateProfile;

var addSubscriber = function addSubscriber(state) {
  firebase.firestore().collection("Subscribers").add(_objectSpread({}, state)).then(function () {
    console.log("added");
  }).catch(function (err) {
    console.log(err);
  });
}; // export const LoginWithGoogle = (dispatch) => {
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(function (result) {
//       const functions = firebase.functions();
//       const sendEmail = functions.httpsCallable("sendEmail");
//       const data = {
//         email: result.user.email,
//         subject: "Hey There !!!",
//         text: "You are now Logged in to Marketing Acad ",
//       };
//       sendEmail(data)
//         .then((res) => {})
//         .catch((err) => {});
//       dispatch({
//         type: "LOGIN",
//         loginCode: 200,
//         errorMessage: null,
//       });
//     })
//     .catch(function (error) {
//       dispatch({
//         type: "LOGIN",
//         loginCode: 100,
//         errorMessage: "Error Logging In",
//       });
//     });
// };


exports.addSubscriber = addSubscriber;