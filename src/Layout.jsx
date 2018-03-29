/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 10:42:28 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-03-29 16:55:13
 */

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      transitionName: 'left',
    }
  }
  componentWillReceiveProps () {
    const { action } = this.props.history
    action === 'PUSH' ? this.setState({transitionName: 'right'}) : this.setState({transitionName: 'left'})
  }
  render () {
    return (
      <CSSTransitionGroup
        transitionName={this.state.transitionName}
        component={"div"}
        className="v-root"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <div key={this.props.location.pathname} className="v-wrapper">{this.props.children}</div>
      </CSSTransitionGroup>
    )
  }
}

export default withRouter(Layout);