import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

import Landing from "./Landing";

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route history={customHistory} path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
