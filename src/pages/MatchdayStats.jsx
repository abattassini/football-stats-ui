import React from "react";
import { Row, Col } from "reactstrap";
import { Dropdown } from "../components/Dropdown";
import { StatsTable } from "../components/stats-table/StatsTable";

const matchdayOptions = [
  { optionValue: 1, optionLabel: "Matchday 1" },
  { optionValue: 2, optionLabel: "Matchday 2" },
  { optionValue: 3, optionLabel: "Matchday 3" },
  { optionValue: 4, optionLabel: "Matchday 4" },
  { optionValue: 5, optionLabel: "Matchday 5" },
  { optionValue: 6, optionLabel: "Matchday 6" },
];

const exampleData = require("../data/example/stats1.json");

export const MatchdayStats = () => {
  return (
    <section className="matchday-stats">
      <Row className="justify-content-md-center mt-4">
        <Col md="auto">
          <Dropdown options={matchdayOptions} />
        </Col>
      </Row>
      <Row md="auto" className="justify-content-md-center mt-4">
        <Col>{exampleData && <StatsTable scores={exampleData} />}</Col>
      </Row>
    </section>
  );
};
