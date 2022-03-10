import React from "react";
import { Col, Row } from "reactstrap";
import { useMemo } from "react";

import { getLogoById } from "../../utils/logoById";

import "./RowInfo.css";

export const MatchPreview = (props) => {
  const homeTeam = useMemo(() => props.homeTeam, [props.homeTeam]);
  const awayTeam = useMemo(() => props.awayTeam, [props.awayTeam]);

  const homeTeamLogo = getLogoById(homeTeam.teamId);
  const awayTeamLogo = getLogoById(awayTeam.teamId);

  return (
    <div className="match-preview">
      <Row>
        <Col md={5} className="right-align">
          <Row className="left-align">
            <Col md={9}></Col>
            <Col md={3}>
              <img
                className="logo-img"
                src={homeTeamLogo}
                alt={`Logo of Team ${homeTeam.teamName}`}
              ></img>
            </Col>
          </Row>
          <Row className="center-align">
            <Col md={8}></Col>
            <Col md={4}>{homeTeam.teamName}</Col>
          </Row>
          <Row className="center-align">
            <Col md={8}></Col>
            <Col md={4}>Home</Col>
          </Row>
        </Col>
        <Col md={2} className="center-align">
          X
        </Col>
        <Col className="left-align">
          <Row className="right-align">
            <Col md={3}>
              <img
                className="logo-img"
                src={awayTeamLogo}
                alt={`Logo of Team ${awayTeam.teamName}`}
              ></img>
            </Col>
            <Col md={10}></Col>
          </Row>
          <Row className="center-align">
            <Col md={4}>{awayTeam.teamName}</Col>
            <Col md={8}></Col>
          </Row>
          <Row className="center-align">
            <Col md={4}>Away</Col>
            <Col md={8}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
