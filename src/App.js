import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useCallback, useState } from "react";
import { Home } from "./pages/Home";
import { MatchdayStats } from "./pages/MatchdayStats";
import { NotImplementedYet } from "./pages/NotImplementedYet";
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
              path="/not-implemented-yet"
              element={<NotImplementedYet />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
