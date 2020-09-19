import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import ScoreProvider from "./context/scoreProvider";

import "./App.css";

import Landing from "./Landing";

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <ScoreProvider>
        <Router>
          <Switch>
            <Route history={customHistory} path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </ScoreProvider>
    );
  }
}

export default App;
