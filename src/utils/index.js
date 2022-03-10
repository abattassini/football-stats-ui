export const getScoreRank = (score) => {
  if (score >= 95) {
    return "A+";
  } else if (score >= 80) {
    return "A";
  } else if (score >= 65) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 35) {
    return "D";
  } else if (score >= 20) {
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

export const getMatchdayScores = (matchdayScores, teamId) => {
  for (let i = 0; i < matchdayScores.length; i++) {
    const element = matchdayScores[i];
    if (element.teamId === teamId) {
      return element;
    }
  }
  return null;
};
