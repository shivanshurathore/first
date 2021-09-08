import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./login.js";
import SignUp from "./signup";

const MainComponent = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
};

export default MainComponent;
