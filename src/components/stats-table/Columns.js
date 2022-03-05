import { getLogoById } from "../../utils/logoById";
import { getScoreRank } from "../../utils/scoreRanks";

export const Columns = [
  {
    Header: " ",
    accessor: "teamId",
    className: "column-logo",
    disableSortBy: true,
    Cell: ({ cell: { value } }) => (
      <img className="logo-img" src={getLogoById(value)} alt="TODO"></img>
    ),
  },
  {
    Header: "Team Name",
    accessor: "teamName",
    className: "column-team-name",
  },
  {
    Header: "Scoring",
    accessor: "scoringScore",
    className: "column-scoring-score",
    Cell: ({ cell: { value } }) => getScoreRank(value),
  },
  {
    Header: "Conceding",
    accessor: "concedingScore",
    className: "column-conceding-score",
    Cell: ({ cell: { value } }) => getScoreRank(value),
  },
];
