export const statsEachTeamSeasonReducer = (state = [], action) => {
  switch (action.type) {
    case "STATS_EACH_TEAM_SEASON":
      return action.payload;
    default:
      return state;
  }
};
