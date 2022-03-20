const initialState = { seasonYear: 2019, matchday: 5 };

export const matchdaySelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_MATCHDAY":
      return action.payload;
    default:
      return state;
  }
};

export const seasonYearForChartReducer = (state = 2019, action) => {
  switch (action.type) {
    case "SELECT_YEAR_CHART":
      return action.payload;
    default:
      return state;
  }
};
