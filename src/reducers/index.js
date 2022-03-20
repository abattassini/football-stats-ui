import {
  matchdaySelectReducer,
  seasonYearForChartReducer,
} from "./matchdaySelect";
import { matchdayScoresReducer } from "./matchdayScores";
import { openCloseSidebarReducer } from "./openCloseSidebar";
import { goalsEachMatchdayReducer } from "./goalsEachMatchday";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  selectedMatchday: matchdaySelectReducer,
  matchdayScores: matchdayScoresReducer,
  openCloseSidebar: openCloseSidebarReducer,
  goalsEachMatchday: goalsEachMatchdayReducer,
  seasonYearChart: seasonYearForChartReducer,
});
