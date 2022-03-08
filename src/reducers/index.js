import { matchdaySelectReducer } from "./matchdaySelect";
import { matchdayScoresReducer } from "./matchdayScores";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  selectedMatchday: matchdaySelectReducer,
  matchdayScores: matchdayScoresReducer,
});
