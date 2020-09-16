import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [openSide, setOpenSide] = useState(true);
  const openSidebar = () => {
    setOpenSide(!openSide);
  };

  return (
    <div className="app">
      <Router>
        <Header openSidebar={openSidebar} />
        <Switch>
          <Route path="/" exact>
            <div className="app__page">
              {openSide && <Sidebar />}

              <RecommendedVideos />
            </div>
          </Route>
          <Route path="/search/:searchTerm" exact>
            <div className="app__page">
              {openSide && <Sidebar />}
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
