import React from "react";
import { Col, Row } from "reactstrap";
import { useEffect } from "react";
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
            <br /> At the moment you can see{" "}
            <Link to={"/main"}>Predictions of the Brazil League</Link>, seasons
            2018, 2019 and 2020.
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p>
            You can also{" "}
            <Link to={"/main"}>
              understand how the predictions are generated
            </Link>
            .
          </p>
        </Col>
      </Row>
    </div>
  );
};
