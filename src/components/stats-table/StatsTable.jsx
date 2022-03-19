import React, { useMemo } from "react";
import { useExpanded, useFilters, useSortBy, useTable } from "react-table";
import { useSelector, useDispatch } from "react-redux";
import { Columns } from "./Columns";
import * as TiIcons from "react-icons/ti";
import { Table } from "reactstrap";
import { RowInfo } from "./RowInfo";
import { getMatchdayScores } from "../../utils";

import "./StatsTable.css";

const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length;

  return (
    <input
      type="text"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
};

export const StatsTable = (props) => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => props.scores, [props.scores]);

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const matchdayScores = useSelector((state) => state.matchdayScores);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useFilters,
      useSortBy,
      useExpanded
    );

  return (
    <>
      <Table dark striped {...getTableProps()} className="stats-table">
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th
                      {...column.getHeaderProps([
                        {
                          className: column.className,
                        },
                      ])}
                    >
                      <div>
                        <span>{column.render("Header")}</span>
                        <span
                          {...column.getHeaderProps([
                            {
                              ...column.getSortByToggleProps(),
                            },
                          ])}
                        >
                          {" "}
                          {column.canSort &&
                            (column.isSorted ? (
                              column.isSortedDesc ? (
                                <TiIcons.TiArrowSortedDown />
                              ) : (
                                <TiIcons.TiArrowSortedUp />
                              )
                            ) : (
                              <TiIcons.TiArrowUnsorted />
                            ))}
                        </span>
                      </div>
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps([
                          { className: cell.column.className },
                        ])}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
                {row.isExpanded && (
                  <tr>
                    <td colSpan={5}>
                      <RowInfo
                        teamScores={getMatchdayScores(
                          matchdayScores,
                          row.original.teamId
                        )}
                        opponentScores={getMatchdayScores(
                          matchdayScores,
                          row.original.opponentId
                        )}
                      />
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
