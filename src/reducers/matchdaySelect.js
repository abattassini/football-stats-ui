const initialState = 5;

export const matchdaySelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_MATCHDAY":
      return action.payload;
    default:
      return state;
  }
};