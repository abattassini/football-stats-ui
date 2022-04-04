import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import "./Home.css";

export const Home = () => {
  return (
    <div className="home-page mt-4">
      <Row className="mt-4 justify-content-center">
        <Col xs={11} sm={10} md={8} xxl={6}>
          <p>Welcome to Football Stats!</p>
          <p>
            This is a website where you can find predictions about football
            matches and charts to visualize interesting data comparisons.
            Currently, the available data is from seasons 2018, 2019 and 2020 of
            Brazil League, but it could be expanded to any football league.
          </p>
          <p>
            At the moment you can see the following pages:
            <ul>
              <li>
                <Link to={"/main"}>
                  Predictions of Goal Scoring and Conceding
                </Link>
                , where a score from A+ to F is calculated to estimate the
                chance of each team to score and concede goals on the selected
                season and matchday.
              </li>
              <li>
                <Link to="/goals-scored-home-away">
                  Goals Scored when Playing Home vs. Away
                </Link>
                , where you can see a cartesian area chart comparing total goals
                scored on each matchday of the season you select.
              </li>
              <li>
                <Link to="/season-stats-by-team">Season Stats By Team</Link>,
                where you can see a bar chart comparing how each team performed
                on each season on different aspects.
              </li>
            </ul>
          </p>
        </Col>
      </Row>
      {/* <Row className="justify-content-center">
        <Col xs={11} sm={10} md={9} xl={8} xxl={6}>
          <p>
            You can also{" "}
            <Link to={"#"}>understand how the predictions are generated</Link>.
          </p>
        </Col>
      </Row> */}
    </div>
  );
};
