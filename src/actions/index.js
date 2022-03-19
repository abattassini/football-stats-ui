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
