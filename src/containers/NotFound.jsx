/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 10:42:05 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-04-01 23:49:13
 */

import React, { Component } from 'react';
import { Button, WingBlank } from 'antd-mobile'
import wpt from '../utils/wpt'
export default class NotFound extends Component {
  handleColseApp = () => {
    wpt.closeApp(function (info) { console.log(info) }, function (fail) { console.log(fail) })
  }
  render () {
    return (
      <WingBlank className="v-wrapper">
        <p style={{textAlign: 'center'}}>404 NotFound</p>
        <Button type='primary' onClick={this.handleColseApp}>关闭应用</Button>
      </WingBlank>
    )
  }
}