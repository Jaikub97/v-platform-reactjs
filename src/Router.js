/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 10:42:28 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-04-02 09:26:57
 */
import React from 'react'
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFound';
import Home from './containers/home'
import Show from './containers/show'
import Test from './containers/Test'
export default () => (
  <Router>
    <Route render={({ history, location}) => (
      <TransitionGroup className="v-root">
        <CSSTransition
          timeout={500}
          classNames={history.action === 'PUSH' ? 'right' : 'left'}
          key={location.pathname}
        >
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/show" component={Show} />
            <Route path="/http" component={Test} />
            <Route path="*" component={NotFound}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}/>
  </Router>
)