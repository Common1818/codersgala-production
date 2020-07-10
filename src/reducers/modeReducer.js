export const modeReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_MODE":
      console.log(action);
      return {
        ...state,
        mode: action.mode,
      };

    default:
      return state;
  }
};
