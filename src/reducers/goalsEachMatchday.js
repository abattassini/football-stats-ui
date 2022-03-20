export const goalsEachMatchdayReducer = (state = [], action) => {
  switch (action.type) {
    case "GOALS_EACH_MATCHDAY":
      return action.payload;
    default:
      return state;
  }
};
