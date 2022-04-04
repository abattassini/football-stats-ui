import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <RiIcons.RiHome4Line />,
    iconClosed: null,
    iconOpened: null,
    subNav: [],
  },
  {
    title: "Matchday Predictions",
    path: "/main",
    icon: <ImIcons.ImTable2 />,
    iconClosed: null,
    iconOpened: null,
    subNav: [],
  },
  {
    title: "Goals Home vs. Away",
    path: "/goals-scored-home-away",
    icon: <BiIcons.BiLineChart />,
    iconClosed: null,
    iconOpened: null,
    subNav: [],
  },
  {
    title: "Teams Stats by Season",
    path: "/season-stats-by-team",
    icon: <RiIcons.RiBarChartHorizontalFill />,
    iconClosed: null,
    iconOpened: null,
    subNav: [],
  },
];
