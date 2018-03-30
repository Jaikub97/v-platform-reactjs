/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 10:41:59 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-03-30 00:40:39
 */

import React, { Component } from 'react';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'
import { LayoutNav } from '../components'
import wpt from '../utils/wpt'
import config from '../utils/config'
const RightContent = ({click}) => (
  <div onClick={ click }>
    Right
  </div>
)
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
    this.props.history.push('/show')
  }
  handleGoToHttp = () => {
    this.props.history.push('/http')
  }
  handleCliclRightContent = () => {
    alert(JSON.stringify(config.getUserInfo))
  }
  render () {
    return [
      <LayoutNav key="v-header" title="首页" rightContent={<RightContent click={this.handleCliclRightContent} />} />,
      <div key="v-container" className="v-container">
        <WingBlank size="sm">
          <WhiteSpace size="lg" />
          <Button type='ghost' onClick={this.handleShowSheet} >ActionSheet组件</Button>
          <WhiteSpace size="lg" />
          <Button type='ghost' onClick={this.handleGoToDemo} >去往jsdemo页面</Button>
          <WhiteSpace size="lg" />
          <Button type='ghost' onClick={this.handleGoToHttp} >去往网络请求测试页面</Button>
        </WingBlank>
      </div>
    ]
  }
}