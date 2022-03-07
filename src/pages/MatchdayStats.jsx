import React from "react";
import { Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectMatchday } from "../actions";

import { Dropdown } from "../components/Dropdown";
import { StatsTable } from "../components/stats-table/StatsTable";

export const MatchdayStats = () => {
  const matchdayOptions = [
    { optionValue: 1, optionLabel: "Matchday 1" },
    { optionValue: 2, optionLabel: "Matchday 2" },
    { optionValue: 3, optionLabel: "Matchday 3" },
    { optionValue: 4, optionLabel: "Matchday 4" },
    { optionValue: 5, optionLabel: "Matchday 5" },
    { optionValue: 6, optionLabel: "Matchday 6" },
  ];

  const exampleData = require("../data/example/stats1.json");

  const selectedMatchday = useSelector((state) => state.selectedMatchday);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(`Calling api for matchday ${selectedMatchday} stats.`);
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
        <Col>{exampleData && <StatsTable scores={exampleData} />}</Col>
      </Row>
    </section>
  );
};
