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
const {Header, Content, Footer, Sider} = Layout;
import TextArea from './TextArea';
import Navigation from './Navigation';
import MainEditor from './MainEditor';
const text = `Геральт зашел в трактир вместе с Весемиром. Шум стоял посреди небольшого зала.
- Налей нам выпить, - сказал Геральт подходя к трактирщику
- Надолго мы тут?, - спросил Весемир обращаясь к ведьмаку
В таверну зашли разбойники:
- Эй седой, ты че тут делаешь а? А ну проваливай отсюдова!`;

const text2 = `Ведьмаки вышли из таверны, снарядили лошадей и отправились в путь!`;

const choises = [`У меня есть 2 меча, я вас на кол посажу если че.Так что иди а иначе я тебе рот в трубу зашатаю`, `Пасть порву, маргала выколю!`, `Танцуют все!`];
const choiseDone = [`- Ты че это вздумал? Дерзить мне? А ну ка бей его ребята, - разбойники набросились на ведьмаков.`, `- Сейчас ты умрешь чучело! - крикнул разбойник и бросился с мечом на Геральта.`, `- Может лучше выпьем? Трактирщик - наливай за мой счет этим доблестным рыцарям!
- Ну это совсем другой разговор! - воскликнул бандит и сел за стол.`];
const goToText = [];
export default class Create extends Component {
  state = {
    goTo: '',
    menu: [],
    modal: false,
    choise: 0
  };

  componentWillMount() {
    this.setState({
      menu: <Menu onClick={this.handleButtonClick}>
          <Menu.Item key="1">Бой</Menu.Item>
          <Menu.Item key="2">Выпивка</Menu.Item>
        </Menu>
    });
  }
  handleButtonClick = (e) => {
    this.setState({goTo: e.item.props.children});
  }
  handleTransfer = (e) => {
    console.info("Make transfer to this text", e);
  }
  handleClose = e => this.setState({modal: false})
  handleOpen = e => this.setState({modal: true})
  handleChoise = ({item, key}) => this.setState({choise: key});
  render() {
    const {goTo, menu, modal, choise} = this.state;
    return <div>
      <Navigation navigation={[{title:'Test'},{title:'Hey'}]}/>
      <MainEditor title="Начало" text="Начинайте писать свой шедевр!"/>
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
