import React from "react";
import { Col, Row } from "reactstrap";
import { useEffect, useMemo } from "react";
import { getStatsEachTeamSeason } from "../services/api";
import {
  selectYearChart,
  updateStatsEachTeamsSeason,
  updateStats,
} from "../actions";
import { useSelector, useDispatch } from "react-redux";
import {
  getMatchLocationOptions,
  getStatsLabel,
  getSeasonYearOptions,
  getStatsOptions,
} from "../utils";
import { Dropdown } from "../components/Dropdown";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useWindowSize } from "../hooks/useWindowSize";
import { getLogoById } from "../utils/logoById";

import "./SeasonStatsByTeam.css";

export const SeasonStatsByTeam = () => {
  const dispatch = useDispatch();

  const statsOptions = getStatsOptions();
  const matchLocationOptions = getMatchLocationOptions();
  const yearOptions = getSeasonYearOptions();

  const statsEachTeamSeason = useSelector((state) => state.statsEachTeamSeason);
  const seasonYearChart = useSelector((state) => state.seasonYearChart);
  const selectedStats = useSelector((state) => state.stats);

  const windowSize = useWindowSize();

  const smallWindowWidth = useMemo(() => {
    return windowSize.width < 768;
  });

  const mediumWindowWidth = useMemo(() => {
    return windowSize.width < 992;
  });

  useEffect(async () => {
    console.log(
      `Calling api for each team stats of season ${seasonYearChart}.`
    );
    const statsEachTeamSeasonResponse = await getStatsEachTeamSeason(
      seasonYearChart
    );
    if (statsEachTeamSeasonResponse.statsEachTeam) {
      dispatch(
        updateStatsEachTeamsSeason(statsEachTeamSeasonResponse.statsEachTeam)
      );
    }
    console.log(statsEachTeamSeason);
  }, [seasonYearChart, dispatch]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload.teamName}`}</p>
          <p className="label">{`${getStatsLabel(selectedStats)}: ${
            payload[0].payload[selectedStats.stat + selectedStats.matchLocation]
          }`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomTickLogo = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <image
          href={getLogoById(payload.value)}
          x={-40}
          y={-25}
          width="45px"
          textAnchor="middle"
          fill="#666"
        />
      </g>
    );
  };

  return (
    <div className="season-stats-by-team-page">
      <section className="container-xl">
        <Row>
          <Col className="mt-5"></Col>
        </Row>
      </section>
      <Row className="d-flex justify-content-center">
        <Col xs={10} sm="auto">
          <Dropdown
            options={statsOptions}
            value={selectedStats.stat}
            onChange={(e) => {
              dispatch(
                updateStats({
                  stat: e.target.value,
                  matchLocation: selectedStats.matchLocation,
                })
              );
            }}
          />
        </Col>
        <Col xs={10} sm="auto">
          <Dropdown
            options={matchLocationOptions}
            value={selectedStats.matchLocation}
            onChange={(e) => {
              dispatch(
                updateStats({
                  stat: selectedStats.stat,
                  matchLocation: e.target.value,
                })
              );
            }}
          />
        </Col>
        <Col xs={10} sm="auto">
          <Dropdown
            options={yearOptions}
            value={seasonYearChart}
            onChange={(e) => {
              dispatch(selectYearChart(Number(e.target.value)));
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={0} md={2}></Col>
        <Col xs={12} md={8}>
          <ResponsiveContainer
            width="100%"
            height={smallWindowWidth ? 1200 : 1000}
          >
            <ComposedChart
              layout="vertical"
              width={500}
              height={930}
              data={statsEachTeamSeason}
              margin={{
                top: 20,
                right: 40,
                bottom: 50,
                left: 20,
              }}
            >
              <CartesianGrid stroke="white" />
              <XAxis
                type="number"
                domain={
                  smallWindowWidth
                    ? [0, "auto"]
                    : selectedStats.stat.includes("goals")
                    ? [0, 100]
                    : [0, 30]
                }
                tick={{ fill: "white", fontSize: "20px" }}
              >
                <Label
                  value={getStatsLabel(selectedStats)}
                  fill="white"
                  fontSize="20px"
                  position="bottom"
                />
              </XAxis>
              <YAxis
                yAxisId={0}
                dataKey={smallWindowWidth ? "teamId" : "teamName"}
                interval={0}
                type="category"
                width={smallWindowWidth ? 50 : 130}
                tick={
                  smallWindowWidth ? (
                    <CustomTickLogo />
                  ) : (
                    { fill: "white", fontSize: "23px" }
                  )
                }
              />
              <YAxis
                yAxisId={1}
                dataKey={selectedStats.stat + selectedStats.matchLocation}
                orientation="right"
                type="category"
                width={50}
                mirror
                tick={{
                  fill: "white",
                  fontSize: "23px",
                  transform: `translate(45, 0)`,
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey={selectedStats.stat + selectedStats.matchLocation}
                barSize={20}
                fill="blue"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Col>
        <Col xs={0} md={2}></Col>
      </Row>
    </div>
  );
};
