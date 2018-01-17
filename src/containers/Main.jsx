import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { NavBar, Icon } from 'antd-mobile'
import wpt from '../utils/wpt'
import Routes from '../router/router'
import { actions } from '../store/common'
// const ShowLoading = CommonActions.showLoading


class Main extends Component {
  constructor () {
    super()
    this.state = {}
  }
  componentDidMount () {
    console.log(this.props)
    this.props.showLoading()
  }


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

function mapStateToProps (state) {
  return  { ...state.Common }
}
function mapDispatchToProps (dispatch) {
  return {
    ...bindActionCreators({ ...actions }, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);