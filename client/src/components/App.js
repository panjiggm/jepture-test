import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Posts from "./Posts";
import Form from "./Form";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/app" component={Posts} />
        <Route path="/create" component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
