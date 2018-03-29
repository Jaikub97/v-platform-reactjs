/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 10:42:18 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-03-29 18:32:39
 */

import React, { Component } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import { LayoutNav, Footer } from '../components'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import Axios from '../utils/axios'

const meiImage = (src, key) => <img src={src} key={key} alt="" style={{width: '100%'}}/>
export default class HttpTest extends Component {
  constructor () {
    super()
    this.state = {
      str: '点击加载数据',
      welfare: []
    }
  }
  handleLoadData = () => {
    Axios.get('/福利/10/2').then(res => {
      this.setState({
        welfare: res.results,
        str: '福利来袭'
      })
    })

  }
  render () {
    return [
      <LayoutNav key="v-header" title='网络请求测试'/>,
      <div key="v-container" className="v-container">
        <WingBlank size="sm">
          <WhiteSpace />
          <CSSTransitionGroup
            transitionName="animateList"
            // transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={1300}
            // transitionEnter={true}
            // transitionLeave={true}
          >
          {
            this.state.welfare.map((item, index) => meiImage(item.url, index))
          }
          </CSSTransitionGroup>
          <WhiteSpace />
        </WingBlank>
      </div>,
      <Footer key='v-footer' type="primary" onClick={this.handleLoadData} title={this.state.str}/>
    ]
  }
}