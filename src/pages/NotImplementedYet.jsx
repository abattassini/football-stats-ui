import React from "react";
import { Col, Row } from "reactstrap";
import { useEffect } from "react";

export const NotImplementedYet = () => {
  useEffect(() => {
    const jsonData = require("../data/example/stats1.json");
    console.log(jsonData);
  }, []);

  return (
    <>
      <Row className="not-implemented-yet">
        <Col>
          <span>Not Implemented Yet</span>
        </Col>
      </Row>
    </>
  );
};
