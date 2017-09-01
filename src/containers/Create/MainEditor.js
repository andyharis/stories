import React, {Component} from 'react';
import {
  Card,
  Row,
  Col,
  Input
} from 'antd';
import TextArea from './TextArea';
import {connect} from 'react-redux';
import {editStory} from 'redux/modules/story';
import Choices from './Choices';

const stateToProps = null;
const dispatchToProps = {
  editStory
};
@connect(stateToProps, dispatchToProps)
class MainEditor extends Component {
  state = {
    edit: false,
  }
  editText = e => this.props.editStory(`${this.props.chain}.text`, e.target.value);
  editTitle = e => this.props.editStory(`${this.props.chain}.title`, e.target.value);
  startEdit = e => this.setState({edit: true})
  endEdit = e => this.setState({edit: false})

  render() {
    const {title, text, choices, currentStory} = this.props;
    const {edit} = this.state;
    const titleHolder = edit ?
      <Input value={title} onChange={this.editTitle} onBlur={this.endEdit}/> :
      <span onDoubleClick={this.startEdit}>{title}</span>;
    return <div>
      <Row>
        <Col span={24}>
          <Card title={titleHolder} noHovering={true} className="editor-content">
            <TextArea value={text} onChange={this.editText}/>
          </Card>
        </Col>
      </Row>
      {choices && <Choices choices={choices} currentStory={currentStory}/>}
    </div>
  }
}
export default MainEditor;
