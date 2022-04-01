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

export const getSeasonYearOptions = () => {
  let options = [
    { optionValue: 2018, optionLabel: `Season 2018` },
    { optionValue: 2019, optionLabel: `Season 2019` },
    { optionValue: 2020, optionLabel: `Season 2020` },
  ];
  return options;
};

export const getStatsOptions = () => {
  let options = [
    { optionValue: "goalsScored", optionLabel: "Goals Scored" },
    { optionValue: "goalsConceded", optionLabel: "Goals Conceded" },
    { optionValue: "victories", optionLabel: "Wins" },
    { optionValue: "ties", optionLabel: "Ties" },
    { optionValue: "losses", optionLabel: "Losses" },
  ];
  return options;
};

export const getMatchLocationOptions = () => {
  let options = [
    { optionValue: "Total", optionLabel: "Home + Away" },
    { optionValue: "Home", optionLabel: "Home" },
    { optionValue: "Away", optionLabel: "Away" },
  ];
  return options;
};

export const getStatsLabel = (selectedStats) => {
  let part1;
  let part2;

  switch (selectedStats.stat) {
    case "goalsScored":
      part1 = "Goals Scored";
      break;
    case "goalsConceded":
      part1 = "Goals Conceded";
      break;
    case "victories":
      part1 = "Matches Won";
      break;
    case "ties":
      part1 = "Tied Matches";
      break;
    case "losses":
      part1 = "Matches Lost";
      break;
    default:
      break;
  }
  switch (selectedStats.matchLocation) {
    case "Total":
      part2 = "this season";
      break;
    case "Home":
      part2 = "playing home this season";
      break;
    case "Away":
      part2 = "playing away this season";
      break;
    default:
      break;
  }

  return `${part1} ${part2}`;
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
