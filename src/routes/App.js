import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from '../containers/Home';
import Login from "../containers/Login";
import NotFound from '../containers/NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component = {Login} />
      <Route component={NotFound}/>
    </Switch>
  </Router>
);

export default App;
