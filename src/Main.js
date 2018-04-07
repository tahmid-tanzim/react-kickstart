import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import PrivateLayout from './components/PrivateLayout';
import PublicLayout from './components/PublicLayout';

import Home from './components/Home';
import CampaignList from './components/CampaignList';
import Login from './components/Login';
import NotFound from './components/NotFound';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <PrivateLayout>
                <Component {...matchProps} />
            </PrivateLayout>
        )}/>
    );
};

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <PublicLayout>
                <Component {...matchProps} />
            </PublicLayout>
        )}/>
    );
};

class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login"/>
                    </Route>
                    <PublicRoute path="/login" component={Login}/>
                    <PrivateRoute path="/app/home" component={Home}/>
                    <PrivateRoute path="/app/campaigns" component={CampaignList}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default Main;
