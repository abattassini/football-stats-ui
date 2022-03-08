export const selectMatchday = (matchdayNumber) => {
  return {
    type: "SELECT_MATCHDAY",
    payload: matchdayNumber,
  };
};

export const updateMatchdayScores = (matchdayScores) => {
  return {
    type: "MATCHDAY_SCORES",
    payload: matchdayScores,
  };
};
