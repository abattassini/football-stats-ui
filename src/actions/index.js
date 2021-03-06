export const selectMatchday = (payload) => {
  return {
    type: "SELECT_MATCHDAY",
    payload: payload,
  };
};

export const updateSidebarState = (open) => {
  return {
    type: "OPEN_CLOSE_SIDEBAR",
    payload: open,
  };
};

export const updateMatchdayScores = (matchdayScores) => {
  return {
    type: "MATCHDAY_SCORES",
    payload: matchdayScores,
  };
};

export const selectYearChart = (payload) => {
  return {
    type: "SELECT_YEAR_CHART",
    payload: payload,
  };
};

export const updateGoalsEachMatchday = (goalsEachMatchday) => {
  return {
    type: "GOALS_EACH_MATCHDAY",
    payload: goalsEachMatchday,
  };
};

export const updateStatsEachTeamsSeason = (statsEachTeam) => {
  return {
    type: "STATS_EACH_TEAM_SEASON",
    payload: statsEachTeam,
  };
};

export const updateStats = (payload) => {
  return {
    type: "STATS",
    payload: payload,
  };
};
