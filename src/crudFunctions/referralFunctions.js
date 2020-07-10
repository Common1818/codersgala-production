import firebase from "../config/fbConfig";

export const unlockTopic = (topicId, uid, dispatch) => {
  console.log(uid);
  firebase
    .firestore()
    .collection("Users")
    .doc(uid)
    .get()
    .then((doc) => {
      console.log(doc.data());
      const userData = doc.data();
      const UnlockedTopicId = userData.UnlockedTopicId;
      let points = userData.points;
      points = points - 1;
      UnlockedTopicId.push({ id: topicId });
      firebase
        .firestore()
        .collection("Users")
        .doc(uid)
        .update({
          UnlockedTopicId: UnlockedTopicId,
          points: points,
        })
        .then(() => {
          dispatch({
            type: "UNLOCK_TOPIC",
            UnlockComplete: "true",
            message: "Unlocked Successfully",
          });
        })
        .catch((err) => {
          dispatch({
            type: "UNLOCK_TOPIC",
            UnlockComplete: "true",
            message: "Error unlocking",
          });
        });
    });
};
