import React, { Component } from 'react';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'
import { LayoutNav } from '../components'
import wpt from '../utils/wpt'
export default class Home extends Component {
  handleShowSheet = () => {
    const params = {
			"title" : "标题",
			"message" : "ios8系统之后才会显示本消息内容",
			"cancelButtonTitle" : "取消", //返回0
			"items" : [ "按钮A", "按钮B", "按钮C", "按钮D", "按钮E" ]
    }
    wpt.showSheet(
      params, 
      (e) => alert('你选择了' + e.index),
      (err) => alert(err)
    )
  }
  handleGoToDemo = () => {
    this.props.history.push('/main/show')
  }
  handleGoToHttp = () => {
    this.props.history.push('/main/http')
  }
  render () {
    return [
      <LayoutNav key="layoutNav" navName='首页' {...this.props}/>,
      <WingBlank key="home" className="home">
        <WhiteSpace size="lg" />
        <Button type='ghost' onClick={this.handleShowSheet} >ActionSheet组件</Button>
        <WhiteSpace size="lg" />
        <Button type='ghost' onClick={this.handleGoToDemo} >去往jsdemo页面</Button>
        <WhiteSpace size="lg" />
        <Button type='ghost' onClick={this.handleGoToHttp} >去往网络请求测试页面</Button>
      </WingBlank>
    ]
  }
}