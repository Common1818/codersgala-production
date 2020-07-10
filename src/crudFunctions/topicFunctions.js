import firebase from "../config/fbConfig";

export const getTopics = async (dispatch) => {
  const topicsArray = [];
  const topicsArraySnapshot = await firebase
    .firestore()
    .collection("TopicNames")
    .orderBy("timestamp", "desc")
    .get();

  topicsArraySnapshot.docs.map((doc) => {
    topicsArray.push({
      id: doc.id,
      ...doc.data(),
    });
    return null;
  });

  dispatch({ type: "FETCH_TOPICS", topics: topicsArray });
};

export const AddTopic = (state, dispatch) => {
  firebase
    .firestore()
    .collection("TopicNames")
    .add({
      ...state,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      dispatch({
        type: "ADD_TOPIC",
        message: "Added topic Successfully",
        color: "success",
      });
    })
    .catch((err) => {
      dispatch({
        type: "ADD_TOPIC",
        message: "Error Adding Topic",
        color: "danger",
      });
    });
  return null;
};

export const UpdateTopic = (state, dispatch) => {
  firebase
    .firestore()
    .collection("TopicNames")
    .doc(state.id)
    .update({
      ...state,
    })
    .then(() => {
      dispatch({
        type: "UPDATE_TOPIC",
        message: "Updated topic Successfully",
        color: "success",
      });
    })
    .catch((err) => {
      dispatch({
        type: "UPDATE_TOPIC",
        message: "Error Updating Topic",
        color: "danger",
      });
    });
};

export const DeleteTopicFunction = async (collectionName, id, dispatch) => {
  const snapshot = await firebase.firestore().collection("Articles").get();

  snapshot.docs.map((doc) => {
    let item = doc.data();
    console.log(item);
    if (item.TopicId === id) {
      //deleting all the articles related to that topic id and deleting it.
      firebase
        .firestore()
        .collection("Articles")
        .doc(doc.id)
        .delete()
        .then(() => {
          firebase
            .firestore()
            .collection(collectionName)
            .doc(id)
            .delete()
            .then(() => {
              dispatch({
                type: "TOPIC_DELETE",
                message: "Topic deleted successfully",
                complete: true,
              });
            })
            .catch(() => {
              dispatch({
                type: "TOPIC_DELETE",
                message: "Error deleteting topic",
                complete: true,
              });
            });
        });
    } else {
      firebase
        .firestore()
        .collection(collectionName)
        .doc(id)
        .delete()
        .then(() => {
          dispatch({
            type: "TOPIC_DELETE",
            message: "Topic deleted successfully",
            complete: true,
          });
        })
        .catch(() => {
          dispatch({
            type: "TOPIC_DELETE",
            message: "Error deleting topic",
            complete: true,
          });
        });
    }
    return null;
  });
};
