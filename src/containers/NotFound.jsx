/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 10:42:05 
 * @Last Modified by:   mr.mshao 
 * @Last Modified time: 2018-03-29 10:42:05 
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
      <WingBlank>
        <p style={{textAlign: 'center'}}>404 NotFound</p>
        <p>
          <Button type='primary' onClick={this.handleColseApp}>关闭应用</Button>
        </p>
        <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>primary</Button>
      </WingBlank>
    )
  }
}