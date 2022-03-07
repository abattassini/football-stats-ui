import { getLogoById } from "../../utils/logoById";
import { getScoreRank } from "../../utils/scoreRanks";

export const Columns = [
  {
    Header: " ",
    accessor: "teamId",
    className: "column-logo",
    disableSortBy: true,
    reverseSort: false,
    Cell: (props) => (
      <img
        className="logo-img"
        src={getLogoById(props.row.original.teamId.toString())}
        alt={`Logo of Team ${props.row.original.teamName.toString()}`}
      ></img>
    ),
  },
  {
    Header: "Team Name",
    accessor: "teamName",
    reverseSort: false,
    className: "column-team-name",
  },
  {
    Header: "Scoring",
    accessor: "scoringScore",
    className: "column-scoring-score",
    reverseSort: true,
    Cell: ({ cell: { value } }) => getScoreRank(value),
  },
  {
    Header: "Conceding",
    accessor: "concedingScore",
    className: "column-conceding-score",
    reverseSort: true,
    Cell: ({ cell: { value } }) => getScoreRank(value),
  },
];
