export const articlesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ARTICLES":
      return {
        ...state,
        articles: action.articles,
      };

    case "ADD_ARTICLE":
      return {
        ...state,
        message: action.message,
        color: action.color,
        complete: true,
      };

    case "UPDATE_ARTICLE":
      return {
        ...state,
        message: action.message,
        color: action.color,
        complete: true,
      };

    default:
      return state;
  }
};
