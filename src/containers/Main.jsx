import React, { Component } from 'react'
import { NavBar, Icon, ActivityIndicator, Popover } from 'antd-mobile'
import wpt from '../utils/wpt'
import Routes from '../router/router'

const Item = Popover.Item
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />

class Main extends Component {
  constructor () {
    super()
    this.state = {
      visible: false
    }
  }
  handleVisibleChange = (visible) => {
    console.log("visible", visible)
    this.setState({visible})
  };
  handlePopoverOnSelect = (node) => {
    alert(node.props.value)
    this.setState({visible: false})
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
    return [
      <NavBar
        className='v-header-bar'
        key='header-bar'
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={ this.handleBack }
        rightContent={
          <Popover
            mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="Scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
              (<Item key="5" value="My Qrcode" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
              (<Item key="6" value="Help" icon={myImg('uQIYTFeRrjPELImDRrPt')}>Help</Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onSelect={this.handlePopoverOnSelect}
            onVisibleChange={this.handleVisibleChange}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      > NavBar </NavBar>
      ,
      <ActivityIndicator 
        key="loading"
        animating={false}
        size='large'
        toast
        text="正在加载..."
      />
      ,
      <div id="v-container" key="v-container">
        <Routes />
      </div>
    ]
  }
}

export default Main;