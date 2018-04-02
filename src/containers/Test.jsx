/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 10:42:18 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-04-01 23:47:04
 */

import React, { Component } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import { LayoutNav, Footer } from '../components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Axios from '../utils/axios'

const MeiImage = ({src, key}) => <img src={src} key={key} alt="" style={{width: '100%'}}/>
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
    return (
      <div className="v-wrapper">
        <LayoutNav title='网络请求测试'/>
        <WingBlank size="sm" className="v-container">
          <WhiteSpace />
          <TransitionGroup>
          {
            this.state.welfare.map((item, index) => (
              <CSSTransition classNames='animateList' timeout={500} key={index}>
                <MeiImage src={item.url} key={index}/>
              </CSSTransition>
            ))
          }
          </TransitionGroup>
          <WhiteSpace />
        </WingBlank>
        <Footer type="primary" onClick={this.handleLoadData} title={this.state.str}/> 
      </div>
    )
  }
}