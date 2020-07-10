import firebase from "../config/fbConfig";

export const getArticles = async (dispatch) => {
  const articlesArray = [];
  const articlesArraySnapshot = await firebase
    .firestore()
    .collection("Articles")
    .orderBy("timestamp")
    .get();

  articlesArraySnapshot.docs.map((doc) => {
    articlesArray.push({
      id: doc.id,
      ...doc.data(),
    });
    return null;
  });

  dispatch({ type: "FETCH_ARTICLES", articles: articlesArray });
};

export const addArticle = (state, dispatch) => {
  firebase
    .firestore()
    .collection("Articles")
    .add({
      ...state,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      dispatch({
        type: "ADD_ARTICLE",
        message: "Article added successfully",
        color: "success",
        complete: true,
      });
    })
    .catch(() => {
      dispatch({
        type: "ADD_ARTICLE",
        message: "Error adding article",
        color: "danger",
      });
    });
};

export const UpdateArticleFunction = (state, ArticleId, dispatch) => {
  firebase
    .firestore()
    .collection("Articles")
    .doc(ArticleId)
    .update({
      ...state,
    })
    .then(() => {
      dispatch({
        type: "UPDATE_ARTICLE",
        color: "success",
        message: "Article updated successfully",
        complete: true,
      });
    })
    .catch(() => {
      dispatch({
        type: "UPDATE_ARTICLE",
        color: "danger",
        message: "Error updating article",
        complete: true,
      });
    });
};
