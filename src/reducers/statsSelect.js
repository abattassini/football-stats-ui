const initialState = { stat: "goalsScored", matchLocation: "Total" };

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STATS":
      return action.payload;
    default:
      return state;
  }
};
