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
      newState.tableNames = action.payload;
      return newState;
    default:
      return newState;
      return state
  }
};