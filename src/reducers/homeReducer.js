export const homeReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_HOME":
      return {
        ...state,
        home: action.home,
        homeLoaded: true,
      };

    case "UPDATE_HOME":
      return {
        ...state,
        message: action.message,
        color: action.color,
        completed: true,
      };

    default:
      return state;
  }
};
