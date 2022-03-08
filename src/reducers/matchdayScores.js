export const matchdayScoresReducer = (state = [], action) => {
  switch (action.type) {
    case "MATCHDAY_SCORES":
      return action.payload;
    default:
      return [];
  }
};
