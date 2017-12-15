const initialState = {
  sideBarVisibility: false
}

export const uiReducer = (state = initialState, action) => {
  var newState = {
    ...state
  }
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      newState.sideBarVisibility = !newState.sideBarVisibility;
      return newState;
    default:
      return newState;

  }
};