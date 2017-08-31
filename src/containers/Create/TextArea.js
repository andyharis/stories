import React, {Component} from 'react';
import {
  Input,
  Menu,
  Layout,
  Row,
  Col,
  Card,
  Dropdown,
  Modal,
  Button,
  Tooltip
} from 'antd';

const TextArea = (props) => {
  return <Input.TextArea rows={6} {...props} />
}

export default TextArea;
