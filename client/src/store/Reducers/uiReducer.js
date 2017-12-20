const initialState = {
  sideBarVisibility: false,
  user: {},
  database: 1,
  users: [],
  statusEnum: []
}

export const uiReducer = (state = initialState, action) => {
  var newState = {
    ...state
  }
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      newState.sideBarVisibility = !newState.sideBarVisibility;
      return newState;
    case "GET_USERS":

      return newState;
    case "GET_USERS_FULFILLED":
      newState.users = action.payload.data
      return newState;
    case "GET_STATUS_ENUM_FULFILLED":
      newState.statusEnum = action.payload.data
      return newState;
    case "SET_USER":
      newState.user = action.payload
      return newState;
    default:
      return newState;

  }
};