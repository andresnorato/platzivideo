import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
