import firebase from "../config/fbConfig";

export const getSpecialities = async (dispatch) => {
  const specialitiesArray = [];
  const specialitiesArraySnapshot = await firebase
    .firestore()
    .collection("Specialities")
    .orderBy("timestamp", "desc")
    .get();

  specialitiesArraySnapshot.docs.map((doc) => {
    specialitiesArray.push({
      id: doc.id,
      ...doc.data(),
    });
    return null;
  });

  dispatch({ type: "FETCH_SPECIALITIES", specialitites: specialitiesArray });
};

export const UpdateCard = (state, dispatch) => {
  console.log(state);
  firebase
    .firestore()
    .collection("Specialities")
    .doc(state.id)
    .update({
      ...state,
    })
    .then(() => {
      firebase
        .firestore()
        .collection("Articles")
        .doc(state.articleId)
        .update({
          ArticleContent: state.ArticleContent,
        })
        .then(() => {
          dispatch({
            type: "UPDATE_CARD",
            message: "Article updated successfully",
            color: "success",
            complete: true,
          });
        });
    })
    .catch(() => {
      dispatch({
        type: "UPDATE_CARD",
        message: "Error updating article",
        color: "danger",
        complete: true,
      });
    });
};

export const AddCardFunction = (state, dispatch) => {
  const { imageUrl, Loading, Name, ArticleContent } = state;
  firebase
    .firestore()
    .collection("Specialities")
    .add({
      imageUrl,
      Name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      firebase
        .firestore()
        .collection("Articles")
        .add({
          ArticleName: Name + "Intro",
          ArticleContent,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      dispatch({
        type: "ADD_CARD",
        message: "Article added successfully",
        color: "success",
        complete: true,
      });
    })
    .catch(() => {
      dispatch({
        type: "UPDATE_CARD",
        message: "Error adding article",
        color: "danger",
        complete: true,
      });
    });
};
