import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Login from "./login";
import SignUp from "./signup";

class MainComponent extends Component{
    render() {
        return(
            <div className="container">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default MainComponent;