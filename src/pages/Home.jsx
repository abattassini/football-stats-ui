import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import "./Home.css";

export const Home = () => {
  return (
    <div className="home-page container-xl my-4">
      <Row className="mt-5">
        <Col>
          <p>
            This is a website where you can find predictions about football
            matches.
          </p>
          <p>
            <br /> At the moment you can see{" "}
            <Link to={"/main"}>Predictions of Goal Scoring and Conceding</Link>,
            and{" "}
            <Link to="/goals-scored-home-away">
              a Chart Comparing Goals Scored when Playing Home vs. Away
            </Link>
            . The available data is from seasons 2018, 2019 and 2020 of Brazil
            League.
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p>
            You can also{" "}
            <Link to={"#"}>understand how the predictions are generated</Link>.
          </p>
        </Col>
      </Row>
    </div>
  );
};
