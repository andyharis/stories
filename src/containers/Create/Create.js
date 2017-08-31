import React,{Component} from 'react';
import {Input,Menu,Layout,Row,Col,Card,Dropdown,Modal,Button} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
export default class Create extends Component {
  state = {
    goTo:'',
    menu:[],
    modal:false
  };

  componentWillMount() {
    this.setState({menu:<Menu onClick={this.handleButtonClick}>
          <Menu.Item key="1">Бой</Menu.Item>
          <Menu.Item key="2">Выпивка</Menu.Item>
      </Menu>});
  }
  handleButtonClick = (e) => {
    this.setState({goTo:e.item.props.children});
  }
  handleTransfer = (e) => {
    console.info("Make transfer to this text",e);
  }
  handleClose = e=>this.setState({modal:false})
  handleOpen = e=>this.setState({modal:true})
  render() {
    const {goTo,menu,modal} = this.state;
    return <div>
      <h3 style={{fontSize:'20px',textAlign:'center'}}>Write your story</h3>
      <Row className="my-row">
        <Col span={24}>
          <Input.TextArea rows={6} value="Начало истории"/>
        </Col>
      </Row>
      <Row className="my-row">
        <Card title={<span>Стычка в таверне</span>}>
          <Col span={4}  className="my-col">
            <Menu mode="inline"
                  style={{ height: '100%' }}>
                <Menu.Item key="1">{`У меня есть 2 меча, я вас на кол посажу если че.Так что иди а иначе я тебе рот в трубу зашатаю`.substr(0,12)+'...'}</Menu.Item>
                <Menu.Item key="2">{`Пасть порву, маргала выколю!`.substr(0,12)+'...'}</Menu.Item>
                <Menu.Item key="3">{`Танцуют все!`.substr(0,12)+'...'}</Menu.Item>
            </Menu>
          </Col>
          <Col span={19}  className="my-col">
             <Input.TextArea rows={6} value="Здесь у нас разветвление истории с последствиями, которые отразятся на истории сразу после выбора."/>
             <Dropdown.Button onClick={this.handleOpen} overlay={menu}>
                Переход к {goTo}
             </Dropdown.Button>
             <Modal title="Вставки"
                    visible={modal}
                    width={720}
                    footer={[
                      <Button key="back" size="large" onClick={this.handleClose}>Закрыть</Button>,
                    ]}
                    onCancel={this.handleClose}>
                <Row>
                  <Col span={4} className="my-col">
                    <Menu mode="inline"
                          style={{ height: '100%' }}>
                        <Menu.Item key="1">{`Бой`.substr(0,12)+'...'}</Menu.Item>
                        <Menu.Item key="2">{`Выпивка!`.substr(0,12)+'...'}</Menu.Item>
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
          <Input.TextArea rows={6} value="Продолжение основной истории."/>
        </Col>
      </Row>
    </div>
  }
}

// export default Create;
