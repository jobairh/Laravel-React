import React, {Component, Fragment} from 'react';
import { Route, Switch } from "react-router";
import homePage from "../pages/homePage";
import coursePlan from "../pages/coursePlan";
import registration from "../pages/registration";
import freeClass from "../pages/freeClass";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={homePage}/>
                    <Route exact path="/coursePlan" component={coursePlan}/>
                    <Route exact path="/registration" component={registration}/>
                    <Route exact path="/freeClass" component={freeClass}/>

                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
