const initialState = {

  commentsState: false,
  comments: []
}

export const translationReducer = (state = initialState, action) => {
  var newState = {
    ...state
  }
  switch (action.type) {
    case "FETCH_TRANSLATION_COMMENTS":
      newState.commentsState = false
      return newState;
    case "FETCH_TRANSLATION_COMMENTS_FULFILLED":
      newState.comments = action.payload.data;
      return newState;
    default:
      return state
  }
};