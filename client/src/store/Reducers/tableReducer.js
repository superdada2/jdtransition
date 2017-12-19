import _ from 'lodash'

const initialState = {
  tableNameState: false,
  tableNames: [],
  commentsState: false,
  comments: [],
  sourceTableState: false,
  sourceTables: [],
  saveCommentState: false
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
      return newState;
    case "FETCH_TABLE_COMMENTS_FULFILLED":
      newState.commentsState = true
      newState.comments = action.payload.data;
      return newState;
    case "FETCH_SOURCE_TABLES":
      newState.sourceTableState = false
      return newState;
    case "FETCH_SOURCE_TABLES_FULFILLED":
      newState.sourceTableState = true
      newState.sourceTables = action.payload.data;
      return newState;
    case "SAVE_TABLE_COMMENT":
      newState.saveCommentState = false
      return newState;
    case "SAVE_TABLE_COMMENT_FULFILLED":
      newState.saveCommentState = true;
      return newState;
    case "CHANGED_ASSIGNED_USER_FULFILLED":
      var id = action.payload.data.tableId
      const index = _.findIndex(newState.tableNames, (i) => {
        return i.id == id
      });
      newState.tableNames[index].assignedTo = action.payload.data.userId
      // newState.tableNames = action.payload.data
      return newState;
    default:
      return state
  }
};
