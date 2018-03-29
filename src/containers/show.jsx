/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 10:42:13 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-03-29 10:56:05
 */

import React, { Component } from 'react';
import wpt from '../utils/wpt'
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'
import { LayoutNav } from '../components'
export default class Show extends Component {
  handleGetUserInfo = () => {
    wpt.getUserInfo(
      function (obj) {
        let msg = "";
          for ( let p in obj ) {
            if ( obj[p] ) {
              msg = msg + p + ":" + obj[p] + " ==== ";
            }
          }
          alert(msg);
      },
      function (err) { alert(err) }
    )
  }
  handleSelectPhote = () => {
    var params = {
      "isCompression" : false //默认为true 为开启压缩 ; false不开启压缩
    };
    wpt.selectPhoto(
      params, 
      function (result) {
        if (result && result.images) {
          for (var i = 0; i < result.images.length; i++) {
            alert(result.images[i]);
          }
        }
      },
      function (err) { alert(err) }
    )
  }
  handleGetPhoneInfo = () => {
    wpt.getPhoneInfo(
      function (obj) {
        var msg = "";
        for ( var p in obj) {
          if (obj[p]) {
            msg = msg + p + ":" + obj[p] + " ==== ";
          }
        }
        alert(msg)
      },
      function (err) { alert(err) }
    )
  }
  handleCheckNetStatus = () => {
    wpt.checkNetStatus(
      function (obj) {
        var msg = "";
          for ( var p in obj) {
            if (obj[p]) {
              msg = msg + p + ":" + obj[p] + " ==== ";
            }
          }
          alert(msg);
      },
      function (err) { alert(err) }
    )
  }
  handleSelectDayAndTime = () => {
    let params = {
			"title" : "选择时间[标题]",
			"message" : "拨动选择时间[信息]"
		};
    wpt.selectDayAndTime(params,
      (msg) => {alert(msg)},
      (err) => {alert(err)}
    )
  }
  handleGetLocation = () => {
    wpt.getLocation(
      function (obj) {
        var msg = "";
        for ( var p in obj) {
          if (obj[p]) {
            msg = msg + p + ":" + obj[p] + " ==== ";
          }
        }
        alert(msg)
      },
      function (err) {alert(err)}
    )
  }
  handleTakeTel = () => {
    var params = {
			telNo : "10086",
			callType : "DIAL"
    };
    wpt.takeTel(
      params,
      function (msg) {
        alert(msg);
      },
      function (err) {
        alert(err)
      }
    )
  }
  handleSendSMS = () => {
    var params = {
			"tel" : [ "10086", "1008611" ],
			"content" : "短信内容",
			"title" : "标题"
    };
    wpt.sendSMS(
      params,
      function (msg) {
        alert(msg)
      },
      function (err) {alert(err)}
    )
  }
  handleCurrentPageParams = () => {
    wpt.currentPageParams(
      function (obj) {
        //obj 就是所有的参数，可以通过遍历的方法 获取
        var msg = "";
        for ( var p in obj) {
          for ( var p2 in obj[p]) {
            msg = msg + p2 + ":" + obj[p][p2] + " ==== ";
          }
        }
        alert(msg);
      },
      function (err) {alert(err)}
    )
  }
  handleScanCode = () => {
    wpt.scanCodeReturnStr(
      function (info) {alert(info)},
      function (err) {alert(err)}
    )
  }
  render () {
    return [
        <LayoutNav key='v-header' title="V平台API"/>,
        <div key='v-container' className="v-container">
          <WingBlank>
        
            <WhiteSpace />
            <Button type='ghost' onClick={this.handleGetUserInfo}>用户信息</Button>
            <WhiteSpace />
            <Button type='ghost' onClick={this.handleSelectPhote}>选择图片</Button>
            <WhiteSpace />
            <Button type='ghost' onClick={this.handleCheckNetStatus}>获取网络</Button>
            <WhiteSpace />
            <Button type='ghost' onClick={this.handleGetPhoneInfo}>获取设备信息</Button>
            
            <WhiteSpace />
            <Button type='ghost' onClick={this.handleSelectDayAndTime}>时间控件 yyyy-MM-dd HH:mm:ss</Button>

            <WhiteSpace />
            <Button type='ghost' onClick={this.handleGetLocation}>定位信息</Button>

            <WhiteSpace />
            <Button type='ghost' onClick={this.handleTakeTel}>拨打电话</Button>
            <WhiteSpace />
            <Button type='ghost' onClick={this.handleSendSMS}>发送短信</Button>
            <WhiteSpace />
            <Button type='ghost' onClick={this.handleCurrentPageParams}>当前页面参数</Button>
            <WhiteSpace />
            <Button type='ghost' onClick={this.handleScanCode}>扫描二维码</Button>
          
          </WingBlank>
        </div>
    ]
  }
};