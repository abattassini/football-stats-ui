import React from "react";
import { Row, Col } from "reactstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMatchday, updateMatchdayScores } from "../actions";
import { getMatchdayOptions, getSeasonYearOptions } from "../utils";

import { Dropdown } from "../components/Dropdown";
import { StatsTable } from "../components/stats-table/StatsTable";
import { getMatchdayScores } from "../services/api";
import { Loading } from "../components/Loading";

export const MatchdayStats = () => {
  const matchdayOptions = getMatchdayOptions();
  const yearOptions = getSeasonYearOptions();

  const selectedMatchday = useSelector((state) => state.selectedMatchday);
  const matchdayScores = useSelector((state) => state.matchdayScores);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(async () => {
    setIsLoading(true);
    const matchdayScores = await getMatchdayScores(
      selectedMatchday.matchday,
      selectedMatchday.seasonYear
    );
    if (matchdayScores.matchdayScores) {
      dispatch(updateMatchdayScores(matchdayScores.matchdayScores));
      setIsLoading(false);
    }
  }, [selectedMatchday]);

  const clearFilters = () => {
    document.getElementById("scoringRank-dropdown").value = ""; // TODO: find a better way to do this
    document.getElementById("concedingRank-dropdown").value = ""; // TODO: find a better way to do this
  };

  return (
    <section className="matchday-stats">
      <Row className="justify-content-center mt-5">
        <Col xs={10} sm="auto">
          <Dropdown
            options={yearOptions}
            value={selectedMatchday.seasonYear}
            disabled={isLoading}
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
        <Col xs={10} sm="auto">
          <Dropdown
            options={matchdayOptions}
            value={selectedMatchday.matchday}
            disabled={isLoading}
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
      {isLoading ? (
        <Loading />
      ) : (
        <Row md="auto" className="justify-content-md-center mt-4">
          <Col>{matchdayScores && <StatsTable scores={matchdayScores} />}</Col>
        </Row>
      )}
    </section>
  );
};
