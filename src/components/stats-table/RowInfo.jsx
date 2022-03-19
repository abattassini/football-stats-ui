import React from "react";
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
    </div>
  );
};
