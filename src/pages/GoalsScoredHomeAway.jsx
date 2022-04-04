import React from "react";
import { Col, Row } from "reactstrap";
import { useEffect, useState } from "react";
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
import { Loading } from "../components/Loading";

export const GoaldScoredHomeAway = () => {
  const dispatch = useDispatch();

  const yearOptions = getSeasonYearOptions();

  const goalsEachMatchday = useSelector((state) => state.goalsEachMatchday);
  const seasonYearChart = useSelector((state) => state.seasonYearChart);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    setIsLoading(true);
    const goalsEachMatchdayResponse = await getGoalsEachMatchday(
      seasonYearChart
    );
    if (goalsEachMatchdayResponse.matchdayGoals) {
      dispatch(
        updateGoalsEachMatchday(goalsEachMatchdayResponse.matchdayGoals)
      );
      setIsLoading(false);
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
      <section className="info-section">
        <Row className="mt-4 justify-content-center">
          <Col xs={11} sm={10} md={7} xxl={6}>
            <p>
              This chart presents the total quantity of Goals Scored Playing at
              Home vs. Goals Scored Playing Away on each matchday of the
              selected season year.
            </p>
            <p> The horizontal axis represents Matchdays.</p>
            <p>The vertical axis represents Goals Scored Quantity.</p>
          </Col>
        </Row>
      </section>
      <Row className="justify-content-center">
        <Col xs={10} sm="auto">
          <Dropdown
            options={yearOptions}
            value={seasonYearChart}
            disabled={isLoading}
            onChange={(e) => {
              dispatch(selectYearChart(Number(e.target.value)));
            }}
          />
        </Col>
      </Row>
      {isLoading ? (
        <Loading />
      ) : (
        <Row className="mx-auto mt-5">
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            {goalsEachMatchday && goalsEachMatchday.length > 0 ? (
              <ResponsiveContainer width="100%" height={440}>
                <AreaChart data={goalsEachMatchday} margin={{ left: -30 }}>
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
      )}
    </div>
  );
};
