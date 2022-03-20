import React from "react";
import { Col, Row } from "reactstrap";
import { useEffect } from "react";
import { getGoalsEachMatchday } from "../services/api";
import { selectYearChart, updateGoalsEachMatchday } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { getSeasonYearOptions } from "../utils";
import { Dropdown } from "../components/Dropdown";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Brush,
} from "recharts";

import "./GoalsScoredHomeAway.css";

export const GoaldScoredHomeAway = () => {
  const dispatch = useDispatch();

  const yearOptions = getSeasonYearOptions();

  const goalsEachMatchday = useSelector((state) => state.goalsEachMatchday);
  const seasonYearChart = useSelector((state) => state.seasonYearChart);

  useEffect(async () => {
    console.log(`Calling api for goals of season ${seasonYearChart} stats.`);
    const goalsEachMatchdayResponse = await getGoalsEachMatchday(
      seasonYearChart
    );
    if (goalsEachMatchdayResponse.matchdayGoals) {
      dispatch(
        updateGoalsEachMatchday(goalsEachMatchdayResponse.matchdayGoals)
      );
    }
  }, [seasonYearChart, dispatch]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Matchday: ${label}`}</p>
          <p className="label">{`Goals Scored Home: ${payload[0].value}`}</p>
          <p className="label">{`Goals Scored Away: ${payload[1].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="goals-scores-home-away-page">
      <section className="info-section container-xl">
        <Row>
          <Col className="mt-5">
            <p>
              This chart presents the total quantity of Goals Scored Playing at
              Home vs. Goals Scored Playing Away on each matchday of the
              selected season year.
            </p>
            <p>The horizontal axis represents Matchdays.</p>
            <p>The vertical axis represents Goals Scored Quantity.</p>
          </Col>
        </Row>
      </section>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Dropdown
            options={yearOptions}
            value={seasonYearChart}
            onChange={(e) => {
              dispatch(selectYearChart(Number(e.target.value)));
            }}
          />
        </Col>
      </Row>
      <Row className="mx-auto mt-5">
        <Col sm={2}></Col>
        <Col sm={8}>
          {goalsEachMatchday && goalsEachMatchday.length > 0 ? (
            <ResponsiveContainer width="100%" height={440}>
              <AreaChart data={goalsEachMatchday}>
                <Area
                  name="Goals Scored Playing at Home"
                  dataKey="goalsScoredHome"
                  stroke="yellow"
                  fill="yellow"
                />

                <Area
                  name="Goals Scored Playing Away"
                  dataKey="goalsScoredAway"
                  stroke="#03a9f4"
                  fill="blue"
                />

                <XAxis dataKey="matchday" stroke="white"></XAxis>

                <YAxis stroke="white" />
                <Legend
                  iconSize={10}
                  wrapperStyle={{
                    paddingTop: "20px",
                  }}
                />
                <Brush fill="#3a383c" stroke="#a9a9a9" />
                <Tooltip
                  content={<CustomTooltip />}
                  contentStyle={{ color: "white" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};
