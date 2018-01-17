import React, { Component } from 'react'
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../store/welfare'
const meiImage = (src, key) => <img src={src} key={key} alt="" style={{width: '100%'}}/>
class HttpTest extends Component {
  constructor () {
    super()
    this.state = {
      str: '点击加载数据'
    }
  }
  handleLoadData = () => {
    this.setState({str: '福利来袭'})
    this.props.fetchWelfare()
  }
  render () {
    return (
      <WingBlank>
        <WhiteSpace />
        {
          this.props.welfare.map((item, index) => meiImage(item.url, index))
        }
        <WhiteSpace />
        <Button type="primary" onClick={this.handleLoadData}>
          {this.state.str}
        </Button>
      </WingBlank>
    )
  }
}

function mapStateToProps (state) {
  return  { ...state.Welfare }
}
function mapDispatchToProps (dispatch) {
  return {
    ...bindActionCreators({
      ...actions
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HttpTest);