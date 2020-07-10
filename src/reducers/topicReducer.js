export const topicsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TOPICS":
      return {
        ...state,
        topics: action.topics,
      };
    case "ADD_TOPIC":
      return {
        ...state,
        message: action.message,
        color: action.color,
        complete: true,
      };
    case "UPDATE_TOPIC":
      return {
        ...state,
        message: action.message,
        color: action.color,
        complete: true,
      };

    case "TOPIC_DELETE":
      return {
        ...state,
        message: action.message,
        complete: true,
      };

    case "UNLOCK_TOPIC":
      return {
        ...state,
        message: action.message,
        UnlockComplete: action.UnlockComplete,
      };

    default:
      return state;
  }
};
