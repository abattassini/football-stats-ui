export const selectMatchday = (matchdayNumber) => {
  return {
    type: "SELECT_MATCHDAY",
    payload: matchdayNumber,
  };
};
