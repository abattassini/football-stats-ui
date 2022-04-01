import axios from "axios";

export const getMatchdayScores = async (nextMatchday, seasonYear) => {
  const response = await axios.get(
    "https://localhost:7004/FootballStats/GetTeamsMatchdayScores/",
    {
      params: {
        nextMatchday: nextMatchday,
        seasonYear: seasonYear,
        matchdaysToConsider: 5,
      },
    }
  );
  return response.data;
};

export const getGoalsEachMatchday = async (seasonYear) => {
  const response = await axios.get(
    "https://localhost:7004/FootballStats/GetGoalsOfEachMatchday/",
    {
      params: {
        seasonYear: seasonYear,
      },
    }
  );
  return response.data;
};

export const getStatsEachTeamSeason = async (seasonYear) => {
  const response = await axios.get(
    "https://localhost:7004/FootballStats/GetStatsEachTeamSeason/",
    {
      params: {
        seasonYear: seasonYear,
      },
    }
  );
  return response.data;
};
