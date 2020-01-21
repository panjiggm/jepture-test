import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Posts from "./Posts";
import Create from "./Create";
import Edit from "./Edit";
import Delete from "./Delete";
import Detail from "./Detail";
import history from "../history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/app" component={Posts} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/delete/:id" component={Delete} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
