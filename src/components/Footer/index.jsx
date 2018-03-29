/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 18:51:21 
 * @Last Modified by:   mr.mshao 
 * @Last Modified time: 2018-03-29 18:51:21 
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Button } from 'antd-mobile'
import './index.less'
export default class Footer extends Component {
  static defaultProps = {
    type: 'primary'
  }
  static propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired
  }
  render () {
    const { type, onClick, title } = this.props
    return (
      <Flex onClick={onClick}>
        <Flex.Item>
          <Button type={type} style={{
            borderRadius: '0',
          }}>{title}</Button>
        </Flex.Item>
      </Flex>
    )
  }
}