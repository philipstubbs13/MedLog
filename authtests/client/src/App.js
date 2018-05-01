import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Importing the Login page
import Login from './containers/Login';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  </Router>
);

export default App;
