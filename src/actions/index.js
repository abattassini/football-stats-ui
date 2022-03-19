export const selectMatchday = (payload) => {
  return {
    type: "SELECT_MATCHDAY",
    payload: payload,
  };
};

export const updateMatchdayScores = (matchdayScores) => {
  return {
    type: "MATCHDAY_SCORES",
    payload: matchdayScores,
  };
};
