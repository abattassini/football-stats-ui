import React from "react";
import { Col, Row } from "reactstrap";
import { useMemo } from "react";

import { getLogoById } from "../../utils/logoById";

export const MatchPreview = (props) => {
  const homeTeam = useMemo(() => props.homeTeam, [props.homeTeam]);
  const awayTeam = useMemo(() => props.awayTeam, [props.awayTeam]);

  const homeTeamLogo = getLogoById(homeTeam.teamId);
  const awayTeamLogo = getLogoById(awayTeam.teamId);

  return (
    <div className="match-preview">
      <Row>
        <Col xs={5} className="right-align">
          <Row className="center-align">
            <Col xs={4} sm={5} md={6} xl={7} xxl={8}></Col>
            <Col xs={8} sm={7} md={6} xl={5} xxl={4}>
              <img
                className="preview-logo-img"
                src={homeTeamLogo}
                alt={`Logo of Team ${homeTeam.teamName}`}
              ></img>
            </Col>
          </Row>
          <Row className="center-align">
            <Col xs={4} sm={6} xl={7} xxl={8}></Col>
            <Col xs={8} sm={6} xl={5} xxl={4}>
              {homeTeam.teamName}
            </Col>
          </Row>
          <Row className="center-align">
            <Col xs={4} sm={6} xl={7} xxl={8}></Col>
            <Col xs={8} sm={6} xl={5} xxl={4}>
              Home
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="center-align">
          X
        </Col>
        <Col className="left-align">
          <Row className="right-align">
            <Col xs={6} sm={5} xl={4} xxl={3}>
              <img
                className="preview-logo-img"
                src={awayTeamLogo}
                alt={`Logo of Team ${awayTeam.teamName}`}
              ></img>
            </Col>
            <Col xs={6} sm={7} xl={8} xxl={9}></Col>
          </Row>
          <Row className="center-align">
            <Col xs={8} sm={6} xl={5} xxl={4}>
              {awayTeam.teamName}
            </Col>
            <Col xs={4} sm={6} xl={7} xxl={8}></Col>
          </Row>
          <Row className="center-align">
            <Col xs={8} sm={6} xl={5} xxl={4}>
              Away
            </Col>
            <Col xs={4} sm={6} xl={7} xxl={8}></Col>
          </Row>
        </Col>
      </Row>
      <Row className="season-stats">
        <Col>
          <Row>
            <Col>{`- Scored ${homeTeam.goalsScoredRecently} goals on last 5 matches.`}</Col>
          </Row>
          <Row>
            <Col>{`- Scored ${homeTeam.goalsScoredWholeSeason} goals on the season so far.`}</Col>
          </Row>
          <Row>
            <Col>{`- Conceded ${homeTeam.goalsConcededRecently} goals on last 5 matches.`}</Col>
          </Row>
          <Row>
            <Col>{`- Conceded ${homeTeam.goalsConcededWholeSeason} goals on the season so far.`}</Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>{`- Scored ${awayTeam.goalsScoredRecently} goals on last 5 matches.`}</Col>
          </Row>
          <Row>
            <Col>{`- Scored ${awayTeam.goalsScoredWholeSeason} goals on the season so far.`}</Col>
          </Row>
          <Row>
            <Col>{`- Conceded ${awayTeam.goalsConcededRecently} goals on last 5 matches.`}</Col>
          </Row>
          <Row>
            <Col>{`- Conceded ${awayTeam.goalsConcededWholeSeason} goals on the season so far.`}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
