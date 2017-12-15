const initialState = {
  tableId: 0,
  fields: [],
  fieldStatus: false
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
    default:
      return state
  }
};
