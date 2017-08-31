import React, {Component} from 'react';
import {
  Breadcrumb,
  Card,
  Input,
  Tooltip,
  Row,
  Col
} from 'antd';
import TextArea from './TextArea';
class MainEditor extends Component {
  render() {
    const {title,text} = this.props;
    return <Row>
      <Col span={24}>
        <Card title={<span>{title}</span>} noHovering={true} className="editor-content">
          <TextArea value={text}/>
        </Card>
      </Col>
    </Row>
  }
}
export default MainEditor;
