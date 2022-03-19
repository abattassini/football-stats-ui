import { matchdaySelectReducer } from "./matchdaySelect";
import { matchdayScoresReducer } from "./matchdayScores";
import { openCloseSidebarReducer } from "./openCloseSidebar";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  selectedMatchday: matchdaySelectReducer,
  matchdayScores: matchdayScoresReducer,
  openCloseSidebar: openCloseSidebarReducer,
});
