const initialState = {
  tableId: 0,
  fields: [],
  fieldStatus: false,
  commentsState: false,
  comments: []
}

export const fieldReducer = (state = initialState, action) => {
  var newState = {
    ...state
  }
  switch (action.type) {
    case "FETCH_FIELD_BY_TABLE_ID_FULFILLED":
      newState.fieldStatus = true
      newState.tableId = action.payload.data[0].tableId
      newState.fields = action.payload.data;
      return newState;
    case "FETCH_FIELD_BY_TABLE_ID":
      newState.fieldStatus = false
      return newState;
    case "FETCH_FIELD_COMMENTS":
      newState.commentsState = false
    case "FETCH_FIELD_COMMENTS_FULFILLED":
      newState.comments = action.payload.data;
    default:
      return state
  }
};
