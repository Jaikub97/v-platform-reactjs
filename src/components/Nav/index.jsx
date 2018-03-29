/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 10:41:30 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-03-29 15:27:27
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavBar, Icon } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import wpt from '../../utils/wpt'
const LayoutNav = ({ title, rightContent, ...props }) => {
  const handleBack = () => {
    const { history, location } = props
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

  return (
    <NavBar
      className='v-header'
      mode="dark"
      icon={<Icon type="left" />}
      onLeftClick={handleBack}
      rightContent={rightContent}
    >
      {title}
    </NavBar>
  )
}
LayoutNav.propTypes = {
  title: PropTypes.string.isRequired,
  rightContent: PropTypes.node
}
export default withRouter(LayoutNav)