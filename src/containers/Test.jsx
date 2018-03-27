import React, { Component } from 'react'
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'
import { LayoutNav } from '../components'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import Axios from '../utils/fetch'

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
    this.setState({str: '福利来袭'})
    // this.props.fetchWelfare()
    Axios.get('/福利/10/2').then(res => {
      this.setState({
        welfare: res.results
      })
    })

  }
  render () {
    return [
      <LayoutNav key='Layout' {...this.props} navName="测试"/>,
      <WingBlank key='body'>
        <WhiteSpace />
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1300}
          transitionEnter={true}
          transitionLeave={true}
        >
        {
          this.state.welfare.map((item, index) => meiImage(item.url, index))
        }
        </CSSTransitionGroup>
        <WhiteSpace />
        <Button type="primary" onClick={this.handleLoadData}>
          {this.state.str}
        </Button>
        <WhiteSpace />
      </WingBlank>
    ]
  }
}