import React, {Component} from 'react';
import {
  Breadcrumb
} from 'antd';

const Navigation = ({navigation}) => {
    return <Breadcrumb separator=">">
    {navigation.map(({title},key)=>{
      return <Breadcrumb.Item key={title+key}>{title}</Breadcrumb.Item>
    })}
    </Breadcrumb>
}

export default Navigation;
