import React, { Component } from 'react';
import { Button, WingBlank, WhiteSpace, ActivityIndicator } from 'antd-mobile';
import fetch from '../utils/fetch'
export default class HttpTest extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: false,
      data: [],
      str: '点击加载数据'
    }
  }
  handleLoadData = () => {
    this.setState({isLoading: true, str: '福利来袭'})
    fetch.get('/福利/10/1')
      .then(res => {
        this.setState({
          isLoading: false,
          data: res.data.results
        })
      })
      .catch(err => {
        this.setState({isLoading: false})
        alert('错误' + err)
      })
  }
  render () {
    return (
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={this.handleLoadData}>
          {this.state.str}
          <ActivityIndicator
            toast
            text="Loading..."
            animating={this.state.isLoading}
          />
        </Button>
        <WhiteSpace></WhiteSpace>
        {
          this.state.data.map((item, index) => {
            return (
              <img src={item.url} alt="" key={index} style={{width: '100%'}}/>
            )
          })
        }
      </WingBlank>
    )
  }
};