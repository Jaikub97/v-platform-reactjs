/*
 * @Author: mr.mshao 
 * @Date: 2018-01-18 14:22:49 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-03-29 10:41:23
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Popover } from 'antd-mobile';
const Item = Popover.Item
// const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />
class myPopover extends Component {
  render () {
    const { visible, onVisibleChange, onSelect } = this.props
    return (
      <Popover
        mask
        visible={ visible }
        overlay={[
          (<Item key="4" value="scan" >Scan</Item>),
          (<Item key="5" value="special" style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
          (<Item key="6" value="button">Help </Item>),
        ]}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0],
        }}
        onVisibleChange={ onVisibleChange }
        onSelect={ onSelect }
      >
        <div id='wrapper'>
          <Icon type="ellipsis" />
        </div>
      </Popover>
    );
  }
}

myPopover.propTypes = {
  visible: PropTypes.bool.isRequired,
  onVisibleChange: PropTypes.func,
  onSelect: PropTypes.func,
};
export default myPopover;
