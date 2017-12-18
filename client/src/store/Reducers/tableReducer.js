const initialState = {
  tableNameState: false,
  tableNames: [],
  commentsState: false,
  comments: []
}

export const tableReducer = (state = initialState, action) => {
  var newState = {
    ...state
  }
  switch (action.type) {
    case "FETCH_TABLE_NAMES_FULFILLED":
      newState.tableNameState = true
      newState.tableNames = action.payload.data;
      return newState;
    case "FETCH_TABLE_NAMES":
      newState.tableNameState = false
      return newState;
    case "FETCH_TABLE_COMMENTS":
      newState.commentsState = false
    case "FETCH_TABLE_COMMENTS_FULFILLED":
      newState.comments = action.payload.data;
    default:
      return state
  }
};