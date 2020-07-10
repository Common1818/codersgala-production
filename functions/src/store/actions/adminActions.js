"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckAdmin = void 0;

var CheckAdmin = function CheckAdmin() {
  return function (dispatch, getState, _ref) {
    var getFirebase = _ref.getFirebase,
        getFirestore = _ref.getFirestore;
    var firebase = getFirebase();
    firebase.auth().currentUser.getIdTokenResult(true).then(function (idTokenResult) {
      // console.log(idTokenResult)
      var isAdmin = idTokenResult.claims.admin;
      dispatch({
        type: "CHECKING_ADMIN",
        isAdmin: isAdmin
      });
    }).catch(function (err) {
      dispatch({
        type: "ERROR_CHECKING_ADMIN",
        err: err
      });
    });
  };
};

exports.CheckAdmin = CheckAdmin;