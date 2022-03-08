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
