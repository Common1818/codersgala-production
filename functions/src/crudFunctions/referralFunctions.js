"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unlockTopic = void 0;

var _fbConfig = _interopRequireDefault(require("../config/fbConfig"));

var unlockTopic = function unlockTopic(topicId, uid, dispatch) {
  console.log(uid);

  _fbConfig.default.firestore().collection("Users").doc(uid).get().then(function (doc) {
    console.log(doc.data());
    var userData = doc.data();
    var UnlockedTopicId = userData.UnlockedTopicId;
    var points = userData.points;
    points = points - 1;
    UnlockedTopicId.push({
      id: topicId
    });

    _fbConfig.default.firestore().collection("Users").doc(uid).update({
      UnlockedTopicId: UnlockedTopicId,
      points: points
    }).then(function () {
      dispatch({
        type: "UNLOCK_TOPIC",
        UnlockComplete: "true",
        message: "Unlocked Successfully"
      });
    }).catch(function (err) {
      dispatch({
        type: "UNLOCK_TOPIC",
        UnlockComplete: "true",
        message: "Error unlocking"
      });
    });
  });
};

exports.unlockTopic = unlockTopic;