import React from "react";
import { Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectMatchday, updateMatchdayScores } from "../actions";
import { getMatchdayOptions, getSeasonYearOptions } from "../utils";

import { Dropdown } from "../components/Dropdown";
import { StatsTable } from "../components/stats-table/StatsTable";
import { getMatchdayScores } from "../services/api";

export const MatchdayStats = () => {
  const matchdayOptions = getMatchdayOptions();
  const yearOptions = getSeasonYearOptions();

  const selectedMatchday = useSelector((state) => state.selectedMatchday);
  const matchdayScores = useSelector((state) => state.matchdayScores);
  const dispatch = useDispatch();

  React.useEffect(async () => {
    console.log(`Calling api for matchday ${selectedMatchday.matchday} stats.`);
    const matchdayScores = await getMatchdayScores(
      selectedMatchday.matchday,
      selectedMatchday.seasonYear
    );
    if (matchdayScores.matchdayScores) {
      dispatch(updateMatchdayScores(matchdayScores.matchdayScores));
    }
  }, [selectedMatchday]);

  const clearFilters = () => {
    document.getElementById("scoringRank-dropdown").value = ""; // TODO: find a better way to do this
    document.getElementById("concedingRank-dropdown").value = ""; // TODO: find a better way to do this
  };

  return (
    <section className="matchday-stats">
      <Row className="justify-content-md-center mt-4">
        <Col md="auto">
          <Dropdown
            options={yearOptions}
            value={selectedMatchday.seasonYear}
            onChange={(e) => {
              dispatch(
                selectMatchday({
                  ...selectedMatchday,
                  seasonYear: Number(e.target.value),
                })
              );
              clearFilters();
            }}
          />
        </Col>
        <Col md="auto">
          <Dropdown
            options={matchdayOptions}
            value={selectedMatchday.matchday}
            onChange={(e) => {
              dispatch(
                selectMatchday({
                  ...selectedMatchday,
                  matchday: Number(e.target.value),
                })
              );
              clearFilters();
            }}
          />
        </Col>
      </Row>
      <Row md="auto" className="justify-content-md-center mt-4">
        <Col>{matchdayScores && <StatsTable scores={matchdayScores} />}</Col>
      </Row>
    </section>
  );
};
