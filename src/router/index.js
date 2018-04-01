import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './layout'
import NotFound from '../containers/NotFound';
export default () => (
  <Router>
    <Switch>
      <Route path='/' component={Layout}/>
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)