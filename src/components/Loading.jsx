import React from "react";
import loadingImage from "../images/loading-buffering.gif";
import { Row, Col } from "reactstrap";

import "./Loading.css";

export const Loading = () => {
  return (
    <Row className="d-flex justify-content-center">
      <Col xs="auto" className="mt-5">
        <img alt="Loading" src={loadingImage} />
      </Col>
    </Row>
  );
};
