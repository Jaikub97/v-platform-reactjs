import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar, Icon, ActivityIndicator } from 'antd-mobile'
import wpt from '../utils/wpt'
import Routes from '../router/router'


class Main extends Component {
  constructor () {
    super()
    this.state = {}
  }
  
  handleBack = () => {
    const { history, location } = this.props
    if (location.pathname === '/main/index') {
      wpt.closeApp(
        function (success) {
          console.log(success)
        },
        function (fail) {
          alert(fail)
        }
      )
    } else {
      history.goBack() // 返回上一页
    }
  }
  render () {
    return(
      <div>
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
          <ActivityIndicator 
            animating={this.props.isLoading}
            size='large'
            toast
            text="正在加载..."
          />
          <Routes />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return  { ...state.Common }
}
// function mapDispatchToProps (dispatch) {
//   return {
//     ...bindActionCreators({ ...actions }, dispatch)
//   }
// }


export default connect(mapStateToProps)(Main);