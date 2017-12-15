const initialState = {
  tableNameState: false,
  tableNames: []
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
    default:
      return state
  }
};