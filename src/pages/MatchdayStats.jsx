import React from "react";
import { Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectMatchday, updateMatchdayScores } from "../actions";
import { getMatchdayOptions } from "../utils";

import { Dropdown } from "../components/Dropdown";
import { StatsTable } from "../components/stats-table/StatsTable";
import { getMatchdayScores } from "../services/api";

export const MatchdayStats = () => {
  const matchdayOptions = getMatchdayOptions();

  const selectedMatchday = useSelector((state) => state.selectedMatchday);
  const matchdayScores = useSelector((state) => state.matchdayScores);
  const dispatch = useDispatch();

  React.useEffect(async () => {
    console.log(`Calling api for matchday ${selectedMatchday} stats.`);
    const matchdayScores = await getMatchdayScores(selectedMatchday, 2019);
    if (matchdayScores.matchdayScores) {
      dispatch(updateMatchdayScores(matchdayScores.matchdayScores));
    }
  }, [selectedMatchday]);

  return (
    <section className="matchday-stats">
      <Row className="justify-content-md-center mt-4">
        <Col md="auto">
          <Dropdown
            options={matchdayOptions}
            value={selectedMatchday}
            onChange={(e) => dispatch(selectMatchday(Number(e.target.value)))}
          />
        </Col>
      </Row>
      <Row md="auto" className="justify-content-md-center mt-4">
        <Col>{matchdayScores && <StatsTable scores={matchdayScores} />}</Col>
      </Row>
    </section>
  );
};
