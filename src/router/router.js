import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../containers/home'
import Show from '../containers/show'
import Test from '../containers/Test'

export default class CRouter extends Component {
  requireAuth = (permission, component) => {
    const { auth } = this.props;
    const { permissions } = auth.data;
    // const { auth } = store.getState().httpData;
    if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
    return component;
  };
  render () {
    return (
      <Switch>
        <Route exact path="/main/index" component={Home} />
        <Route exact path="/main/show" component={Show} />
        <Route exact path="/main/http" component={Test} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    )
  }
}