import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useCallback, useState } from "react";
import { MatchdayStats } from "./pages/MatchdayStats";
import { NotImplementedYet } from "./pages/NotImplementedYet";

function App() {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);

  const callback = useCallback((isOpened) => {
    setIsSideBarOpened(isOpened);
  }, []);

  return (
    <div id="app">
      <Router>
        <Sidebar callback={callback} />
        <div className={`${isSideBarOpened ? "left-margin" : ""}`}>
          <Routes>
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
