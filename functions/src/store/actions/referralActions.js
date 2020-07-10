"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unlockTopic = void 0;

var unlockTopic = function unlockTopic(topicId) {
  return function (dispatch, getState, _ref) {
    var getFirebase = _ref.getFirebase,
        getFirestore = _ref.getFirestore;
    var firestore = getFirestore();
    var state = getState();
    var userId = state.firebase.auth.uid;
    console.log(userId);
    firestore.collection("Users").doc(userId).get().then(function (doc) {
      console.log(doc.data());
      var userData = doc.data();
      var UnlockedTopicId = userData.UnlockedTopicId;
      var points = userData.points;
      points = points - 1;
      UnlockedTopicId.push({
        id: topicId
      });
      firestore.collection("Users").doc(userId).update({
        UnlockedTopicId: UnlockedTopicId,
        points: points
      });
    });
  };
};

exports.unlockTopic = unlockTopic;