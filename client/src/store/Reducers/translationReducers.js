const initialState = {

  commentsState: false,
  comments: [],
  translationsState: false,
  translations: []

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
      newState.commentsState = true
      newState.comments = action.payload.data;
      return newState;
    case "FETCH_TRANSLATIONS":
      newState.translationsState = false
      return newState;
    case "FETCH_TRANSLATIONS_FULFILLED":
      newState.translationsState = true
      newState.translations = action.payload.data;
      return newState
    case "SAVE_TRANSLATION_COMMENT":
      newState.saveCommentState = false
      return newState;
    case "SAVE_TRANSLATION_COMMENT_FULFILLED":
      newState.saveCommentState = true;
      return newState;
    default:
      return state
  }
};
