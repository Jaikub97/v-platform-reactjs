import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../containers/home'
import Show from '../containers/show'
import Test from '../containers/Test'

export default () => (
  <Switch>
    <Route exact path="/main/" component={Home} />
    <Route path="/main/show" component={Show} />
    <Route path="/main/http" component={Test} />
    <Route render={() => <Redirect to="/404" />} />
  </Switch>
)