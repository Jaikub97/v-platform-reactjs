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