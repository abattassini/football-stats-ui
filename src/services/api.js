import axios from "axios";

export const getMatchdayScores = async (nextMatchday, seasonYear) => {
  const response = await axios.get(
    "https://footballstatsapi.azure-api.net/FootballStats/GetTeamsMatchdayScores/",
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
    "https://footballstatsapi.azure-api.net/FootballStats/GetGoalsOfEachMatchday",
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
    "https://footballstatsapi.azure-api.net/FootballStats/GetStatsEachTeamSeason",
    {
      params: {
        seasonYear: seasonYear,
      },
    }
  );
  return response.data;
};
