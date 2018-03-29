/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 10:42:38 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-03-29 15:23:24
 */

import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import NotFound from './containers/NotFound';
import Home from './containers/home'
import Show from './containers/show'
import Test from './containers/Test'
export default () => (
  <Router>
    <Layout>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/show" component={Show} />
          <Route path="/http" component={Test} />
          <Route path="*" component={NotFound}/>
      </Switch>
    </Layout>
  </Router>
)