import React, {Component} from 'react';
import {
  Breadcrumb
} from 'antd';
import {connect} from 'react-redux';
import {navigateToPath} from 'redux/modules/story';
@connect(null, {navigateToPath})
class Navigation extends Component {
  render() {
    const {navigation, navigateToPath} = this.props;
    const nav = [];
    return <Breadcrumb separator=">">
      {navigation.map(({title, id}, key) => {
        const navigateTo = new Set([...nav]);
        nav.push(id);
        return <Breadcrumb.Item key={title + key + id} onClick={e => navigateToPath(id, navigateTo)}>
          {title}
        </Breadcrumb.Item>
      })}
    </Breadcrumb>
  }
}

export default Navigation;
