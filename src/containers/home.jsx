import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, WingBlank } from 'antd-mobile'
import wpt from '../utils/wpt'
export default class Home extends Component {
  handleShowSheet = () => {
    const params = {
			"title" : "标题",
			"message" : "ios8系统之后才会显示本消息内容",
			"cancelButtonTitle" : "取消", //返回0
			"items" : [ "按钮A", "按钮B", "按钮C", "按钮D", "按钮E" ]
    }
    wpt.showSheet(params)
        .then(index => alert(index))
        .catch(err => alert(err))
  }
  render () {
    return (
      <WingBlank className="home">
        <div style={{color: 'red', textAlign: 'center'}}>
          v-platform-react demo
        </div>
        <Link to='/main/show'>jsdemo1</Link>
        <Button type='primary' size='small' onClick={this.handleShowSheet} >showSheet</Button>
      </WingBlank>
    )
  }
}