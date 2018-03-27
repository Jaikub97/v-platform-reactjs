import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../containers/NotFound';
import Layout from '../containers/Layout';
import Routes from './router'
export default () => (
  <Router>
    <Switch>
        <Route exact path="/" render={() => <Redirect to="/main" push />} />        
        <Route path="/main" render={
          ({match, location, history}) => {
            return (
              <Layout match={match} location={location} history={history}>
                <Routes/>
              </Layout>
            )
          }
        } />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
    </Switch>
  </Router>
)