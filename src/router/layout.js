import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { NavBar, Icon, ActivityIndicator } from 'antd-mobile'
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import wpt from '../utils/wpt'
import Home from '../containers/home'
import Show from '../containers/show'
import Test from '../containers/Test'


const RightContent = () => <div>Right</div>

class Layout extends Component {
  handleBack = () => {
    const { history, location } = this.props
    if (location.pathname === '/') {
      wpt.closeApp(
        function (success) {
          console.log(success)
        },
        function (fail) {
          alert(fail)
        }
      )
    } else {
      history.goBack() // 返回上一页
    }
  }
  render () {
    const { history, location, isLoading } = this.props
    return [
      <NavBar
        className='v-header'
        key='v-header'
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={ this.handleBack }
        rightContent={ <RightContent/> }
      > NavBar </NavBar>
      ,
      <ActivityIndicator 
        key="v-loading"
        animating={ isLoading }
        size='large'
        toast
        text="正在加载..."
      />
      ,
      <TransitionGroup key='css-transition-group' className='v-container'>
        <CSSTransition
          classNames={ history.action === 'PUSH' ? 'right' : 'left' }
          timeout={ 500 }
          key={ location.pathname }
        >
          <Switch location={ location }>      
            <Route exact path="/" component={Home} />
            <Route path="/show" component={Show} />
            <Route path="/http" component={Test} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    ]
  }
}

function mapStateToProps (state) {
  return  { ...state.Common }
}
// function mapDispatchToProps (dispatch) {
//   return {
//     ...bindActionCreators({ ...actions }, dispatch)
//   }
// }


export default connect(mapStateToProps)(Layout)