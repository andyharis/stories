import React, {Component} from 'react';
import Navigation from './Navigation';
import MainEditor from './MainEditor';
import {connect} from 'react-redux';
import {getNavigation, getStory} from 'redux/modules/story';

const stateToProps = state => ({story: state.story});
const dispatchToProps = {
  getNavigation,
  getStory
};
@connect(stateToProps, dispatchToProps)
export default class Create extends Component {
  render() {
    const {story: {stories, currentStory}} = this.props;
    return <div>
      <Navigation navigation={this.props.getNavigation()}/>
      <br/>
      <MainEditor {...this.props.getStory(currentStory)} currentStory={currentStory} chain={currentStory}/>
    </div>
  }
}
/**
 <h3 style={{
  fontSize: '20px',
  textAlign: 'center'
}}>Write your story</h3>
 <Row className="my-row">
 <Col span={24}>
 <TextArea value={text}/>
 </Col>
 </Row>
 <Row className="my-row">
 <Card title={< span > Стычка в таверне < /span>}>
 <Col span={4} className="my-col">
 <Menu mode="inline" onSelect={this.handleChoise} style={{
        height: '100%'
      }}>
 {choises.map((each, key) => {
   return <Menu.Item key={key}>
     <Tooltip title={each}>
       {each.length > 15
         ? each.substr(0, 12) + '...'
         : each}
     </Tooltip>
   </Menu.Item>
 })}
 </Menu>
 </Col>
 <Col span={19} className="my-col">
 <TextArea value={choiseDone[choise]}/> {/*<Dropdown.Button onClick={this.handleOpen} overlay={menu}>
        Переход к {goToText[choise]}
      </Dropdown.Button>
      <Modal title="Вставки" visible={modal} width={720} footer={[ < Button key = "back" size = "large" onClick = {
          this.handleClose
        } > Закрыть < /Button>, ]} onCancel={this.handleClose}>
        <Row>
          <Col span={4} className="my-col">
            <Menu mode="inline" selectedKeys={goToText[choise]} style={{
              height: '100%'
            }}>
              <Menu.Item key="0">{`Бой`.substr(0, 12) + '...'}</Menu.Item>
              <Menu.Item key="1">{`Выпивка!`.substr(0, 12) + '...'}</Menu.Item>
            </Menu>
          </Col>
          <Col span={19} className="my-col">
            <Input.TextArea rows={6} value="Здесь промежуточные вставки, которые можно будет прочитать после выбора последствия и наличии перехода к ней."/>
          </Col>
        </Row>
      </Modal>
    </Col>
  </Card>
</Row>
<Row className="my-row">
  <Col span={24}>
    <TextArea value={text2}/>
  </Col>
</Row>



*/
// export default Create;
