import { matchdaySelectReducer } from "./matchdaySelect";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  selectedMatchday: matchdaySelectReducer,
});
