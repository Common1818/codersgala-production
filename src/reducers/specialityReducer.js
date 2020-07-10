export const specialityReducer = (state, action) => {
  switch (action.type) {
    // case "ADD_COURSE":
    //     return {
    //         ...state,
    //         errorCode: action.errorCode,
    //     };
    case "FETCH_SPECIALITIES":
      return {
        ...state,
        specialities: action.specialitites,
      };

    case "UPDATE_CARD":
      return {
        ...state,
        message: action.message,
        color: action.color,
        complete: action.complete,
      };

    case "ADD_CARD":
      return {
        ...state,
        message: action.message,
        color: action.color,
        complete: action.complete,
      };

    // case "EDIT_COURSE":
    //     return {
    //         ...state,
    //         error: action.error,
    //         errorCode: action.errorCode,
    //     };

    // case "DELETE_COURSE":
    //     return {
    //         ...state,
    //         errorCode: action.errCode,
    //     };

    // case "ADD_COURSE_VIDEO":
    //     return {
    //         ...state,
    //         errorCode: action.errorCode,
    //     };

    // case "ADD_COURSE_TOPIC":
    //     return {
    //         ...state,
    //         errorCode: action.errorCode,
    //     };

    default:
      return state;
  }
};
