import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./pages/Home";
import { MatchdayStats } from "./pages/MatchdayStats";
import { GoaldScoredHomeAway } from "./pages/GoalsScoredHomeAway";
import { SeasonStatsByTeam } from "./pages/SeasonStatsByTeam";
import { useSelector } from "react-redux";

function App() {
  const openCloseSidebar = useSelector((state) => state.openCloseSidebar);

  return (
    <div id="app">
      <Router>
        <Sidebar />
        <div className={openCloseSidebar ? "margin-left" : ""}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/main" element={<MatchdayStats />} />
            <Route
              exact
              path="/goals-scored-home-away"
              element={<GoaldScoredHomeAway />}
            />
            <Route
              exact
              path="/season-stats-by-team"
              element={<SeasonStatsByTeam />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
