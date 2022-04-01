import {
  matchdaySelectReducer,
  seasonYearForChartReducer,
} from "./matchdaySelect";
import { matchdayScoresReducer } from "./matchdayScores";
import { openCloseSidebarReducer } from "./openCloseSidebar";
import { goalsEachMatchdayReducer } from "./goalsEachMatchday";
import { statsEachTeamSeasonReducer } from "./statsEachTeamSeason";
import { statsReducer } from "./statsSelect";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  selectedMatchday: matchdaySelectReducer,
  matchdayScores: matchdayScoresReducer,
  openCloseSidebar: openCloseSidebarReducer,
  goalsEachMatchday: goalsEachMatchdayReducer,
  seasonYearChart: seasonYearForChartReducer,
  statsEachTeamSeason: statsEachTeamSeasonReducer,
  stats: statsReducer,
});
