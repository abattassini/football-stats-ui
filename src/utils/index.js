export const getScoreRank = (score) => {
  if (score >= 35) {
    return "A+";
  } else if (score >= 30) {
    return "A";
  } else if (score >= 25) {
    return "B";
  } else if (score >= 20) {
    return "C";
  } else if (score >= 15) {
    return "D";
  } else if (score >= 10) {
    return "E";
  } else if (score >= 5) {
    return "F";
  } else {
    return "G";
  }
};

export const getMatchdayOptions = () => {
  let matchdayOptions = [];
  for (let i = 5; i <= 38; i++) {
    matchdayOptions.push({ optionValue: i, optionLabel: `Matchday ${i}` });
  }
  return matchdayOptions;
};
