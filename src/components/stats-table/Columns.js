import React from "react";

import { getLogoById } from "../../utils/logoById";
import * as BsIcons from "react-icons/bs";

const LIKELY = "Likely (A+, A)";
const NEUTRAL = "Neutral (B, C)";
const UNLIKELY = "Unlikely (D, E, F, G)";

const ScoreRanks = (rank) => {
  switch (rank) {
    case LIKELY:
      return ["A+", "A"];
    case NEUTRAL:
      return ["B", "C"];
    case UNLIKELY:
      return ["D", "E", "F", "G"];
    default:
      return ["A+", "A", "B", "C", "D", "E", "F", "G"];
  }
};

const customRankSorting = (rowA, rowB, id, desc) => {
  if (rowB.values[id] === "A+" && rowA.values[id] !== "A+") return 1;
  if (rowA.values[id] === "A+" && rowB.values[id] !== "A+") return -1;
  if (rowA.values[id] > rowB.values[id]) return 1;
  if (rowB.values[id] > rowA.values[id]) return -1;
  return 0;
};

const SelectColumnFilter = ({ column: { setFilter, id } }) => {
  const options = [LIKELY, NEUTRAL, UNLIKELY];

  return (
    <select
      className="rank-dropdown"
      id={`${id}-dropdown`}
      onChange={(e) => {
        setFilter(ScoreRanks(e.target.value) || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export const Columns = [
  {
    Header: () => null,
    id: "expander",
    className: "column-expander",
    Cell: ({ row }) => (
      <span {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? (
          <BsIcons.BsChevronDown />
        ) : (
          <BsIcons.BsChevronRight />
        )}
      </span>
    ),
  },
  {
    Header: () => null,
    accessor: "teamId",
    Filter: false,
    className: "column-logo",
    disableSortBy: true,
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
    className: "column-team-name",
  },
  {
    Header: "Scoring",
    accessor: "scoringRank",
    Filter: SelectColumnFilter,
    filter: "includesSome",
    className: "column-scoring-score",
    sortType: customRankSorting,
  },
  {
    Header: "Conceding",
    accessor: "concedingRank",
    Filter: SelectColumnFilter,
    filter: "includesSome",
    className: "column-conceding-score",
    sortType: customRankSorting,
  },
];
