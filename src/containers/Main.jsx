import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile'
import wpt from '../utils/wpt'
import Routes from '../router/router';
export default class Main extends Component {
  
  handleBack = () => {
    const { history, location } = this.props
    if (location.pathname === '/main/index') {
      wpt.closeApp(function (success) {
        console.log(success)
      }, function (fail) {
        alert(fail)
      })
    } else {
      history.goBack() // 返回上一页
    }
  }
  render () {
    return(
      <div>
          {/* <div style={{height: '19px',backgroundColor:'#108ee9'}}></div> */}
          <NavBar
            style={{paddingTop: '19px'}}
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={ this.handleBack }
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
              <Icon key="1" type="ellipsis" />
            ]}
          > NavBar </NavBar>
          <Routes />
      </div>
    )
  }
}