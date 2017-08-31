import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import Router from 'routes';
import {Link} from 'react-router-dom';
import './App.css';
import * as tables from 'configs/tables';
import HocTableGrid from 'components/table/HocTableGrid';

export default class App extends Component {

  render() {
    return (<Layout className="layout">
        <Layout.Header>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1">
              <Link to="/create">Create</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/read">Read</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>

        <Layout.Content>
          <div className="content">
              <Router/>
          </div>
        </Layout.Content>

        <Layout.Footer>
        </Layout.Footer>

      </Layout>
    );
  }
}
