// import React from 'react';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../containers/NotFound';
// import Login from '../containers/Login';
import Main from '../containers/Main';
export default class appRouter extends Component {
  render () {
    return (
      <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/main/index" push />} />        
            <Route path="/main" component={Main} />
            <Route path="/404" component={NotFound} />
            {/* <Route path="/login" component={Login} /> */}
            <Route component={NotFound} />
        </Switch>
    </Router>
    )
  }
}
