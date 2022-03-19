export const openCloseSidebarReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_CLOSE_SIDEBAR":
      return action.payload;
    default:
      return state;
  }
};
