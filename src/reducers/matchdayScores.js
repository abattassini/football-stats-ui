import { getScoreRank } from "../utils";

export const matchdayScoresReducer = (state = [], action) => {
  switch (action.type) {
    case "MATCHDAY_SCORES":
      return processMatchdayScoresPayload(action.payload);
    default:
      return state;
  }
};

const processMatchdayScoresPayload = (payload) => {
  const processedPayload = [];
  for (let i = 0; i < payload.length; i++) {
    const element = payload[i];
    processedPayload.push({
      ...element,
      scoringRank: getScoreRank(element.scoringScore),
      concedingRank: getScoreRank(element.concedingScore),
    });
  }
  return processedPayload;
};
