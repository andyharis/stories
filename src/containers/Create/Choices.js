import React, {Component} from 'react';
import {
  Row,
  Col,
  Menu,
  Card
} from 'antd';
import {connect} from 'react-redux';
import {changeStory} from 'redux/modules/story';
@connect(null, {changeStory})
class Choices extends Component {
  render() {
    const {changeStory, choices,currentStory} = this.props;
    return <Row>
      <Col span="24">
        <h3>Choices</h3>
        <hr/>
        <Menu model="vertical" onClick={e => changeStory(e.item.props.changeid,currentStory)}>
          {choices.map(({title, storyId}, key) => {
            return <Menu.Item key={title + storyId + key} changeid={storyId}>
              {title}
            </Menu.Item>
          })}
        </Menu>
      </Col>
    </Row>
  }
}

export default Choices;
