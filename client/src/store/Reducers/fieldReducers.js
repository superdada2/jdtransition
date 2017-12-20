import _ from 'lodash'
const initialState = {
  tableId: 0,
  fields: [],
  fieldState: false,
  commentsState: false,
  comments: [],
  field: {},
  userField: []
}

export const fieldReducer = (state = initialState, action) => {
  var newState = {
    ...state
  }
  switch (action.type) {
    case "FETCH_FIELD_BY_TABLE_ID_FULFILLED":
      newState.fieldState = true
      newState.tableId = action.payload.data[0].tableId
      newState.fields = action.payload.data;
      return newState;
    case "FETCH_FIELD_BY_TABLE_ID":
      newState.fieldState = false
      return newState;
    case "FETCH_FIELD_COMMENTS":
      newState.commentsState = false
      return newState;
    case "FETCH_FIELD_COMMENTS_FULFILLED":
      newState.comments = action.payload.data;
      return newState;
    case "FETCH_FIELD_FULFILLED":
      newState.field = action.payload.data;
      return newState;
    case "CHANGE_ASSIGNED_USER_PENDING":

      return newState;
    case "CHANGE_ASSIGNED_USER_FULFILLED":
      const id = action.payload.data.fieldId
      // console.log(action.payload.data); console.log(newState.fields);
      const index = _.findIndex(newState.fields, (i) => {
        return i.id == id
      });
      newState.fields[index].assignedTo = action.payload.data.userId
      return newState;
    case "FETCH_FIELD_USER_FULFILLED":
      newState.userField = action.payload.data
      return newState
      break;
    default:
      return state
  }
};
