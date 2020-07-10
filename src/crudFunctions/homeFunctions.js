import firebase from "../config/fbConfig";

export const getHome = async (dispatch) => {
  const HomeArray = [];
  const HomeArraySnapshot = await firebase.firestore().collection("Home").get();

  HomeArraySnapshot.docs.map((doc) => {
    HomeArray.push({
      id: doc.id,
      ...doc.data(),
    });
    return null;
  });

  dispatch({ type: "FETCH_HOME", home: HomeArray });
};

export const UpdateHome = (state, dispatch) => {
  firebase
    .firestore()
    .collection("Home")
    .doc("HomeBottom")
    .update({
      ...state,
    })
    .then(() => {
      dispatch({
        type: "UPDATE_HOME",
        message: "Updated Home Successfully",
        color: "success",
      });
    })
    .catch((err) => {
      dispatch({
        type: "UPDATE_HOME",
        message: "Error Updating Home",
        color: "danger",
      });
    });
};
