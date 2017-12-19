const initialState = {
  sideBarVisibility: false,
  user: 1,
  database: 1,
  users: []
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

    default:
      return newState;

  }
};