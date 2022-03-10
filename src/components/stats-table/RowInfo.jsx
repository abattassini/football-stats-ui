import React from "react";
import { Col, Row } from "reactstrap";
import { useMemo } from "react";
import { MatchPreview } from "./MatchPreview";

import "./RowInfo.css";

export const RowInfo = (props) => {
  const scores = useMemo(() => props.teamScores, [props.teamScores]);
  const opponentScores = useMemo(
    () => props.opponentScores,
    [props.opponentScores]
  );

  return (
    <div className="row-info">
      <MatchPreview
        homeTeam={scores.playsAtHome ? scores : opponentScores}
        awayTeam={scores.playsAtHome ? opponentScores : scores}
      />
      <Row className="season-stats">
        <Col>
          <Row>
            <Col>{`- ${scores.teamName} scored ${scores.goalsScoredRecently} goals on last 5 matches.`}</Col>
          </Row>
          <Row>
            <Col>{`- ${scores.teamName} scored ${scores.goalsScoredWholeSeason} goals on the season so far.`}</Col>
          </Row>
          <Row>
            <Col>{`- ${scores.teamName} conceded ${scores.goalsConcededRecently} goals on last 5 matches.`}</Col>
          </Row>
          <Row>
            <Col>{`- ${scores.teamName} conceded ${scores.goalsConcededWholeSeason} goals on the season so far.`}</Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>{`- ${opponentScores.teamName} scored ${opponentScores.goalsScoredRecently} goals on last 5 matches.`}</Col>
          </Row>
          <Row>
            <Col>{`- ${opponentScores.teamName} scored ${opponentScores.goalsScoredWholeSeason} goals on the season so far.`}</Col>
          </Row>
          <Row>
            <Col>{`- ${opponentScores.teamName} conceded ${opponentScores.goalsConcededRecently} goals on last 5 matches.`}</Col>
          </Row>
          <Row>
            <Col>{`- ${opponentScores.teamName} conceded ${opponentScores.goalsConcededWholeSeason} goals on the season so far.`}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
