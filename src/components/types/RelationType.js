import React, {Component,} from 'react';
import TypeConfig, {TypeForm, TypeView} from './Type';
import {Icon, Select, Modal, Button} from 'antd';
import Request from "components/request/Request";
import Grid from "containers/Grid";
import * as configs from "configs/tables"

@TypeForm
export class RelationTypeForm extends Component {
  state = {
    data: [],
    visible:false,
    selRow: {}
  }

  handleSearch = (val) => {
    const {pk, searchField, searchTable, value} = this.props;
    let select = {};
    select[searchField] = `:~${val}`;
    select[pk] = "";
    if(val!==""){
      Request(searchTable, {select: select, 'per-page': 7}).then((result) => {
        this.setState({data: result.data.data});
      })
    }
  }

  showModal = () =>{
    this.setState({visible: !this.state.visible, selRow: {}});
  }

  handleOk = () => {
    const {selRow} = this.state;
    this.setState({data: [selRow]}, ()=>{
      this.props.handleChange(selRow[this.props.pk]);
      this.showModal();
    });

  }
  selectRow = (row) => {
    this.setState({selRow: row.data});
  }

  rowDoubleClick = (row) =>{
    this.setState({selRow: row.data}, ()=>{
      this.handleOk();
    });
  }

  render() {
    const {value, label, pk, searchField, handleChange, searchTable} = this.props;
    const {data,visible, selRow} = this.state;
    const params = {};
    return <div>
      <Select
        value={value}
        showSearch
        placeholder={`Select ${label}`}
        notFoundContent="Not Found"
        optionFilterProp="children"
        style={{width: 200}}
        onChange={handleChange}
        onSearch={this.handleSearch}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {data.map((el) => {
          return <Select.Option key={el[searchField] + el[pk]} value={el[pk]}>
            {el[searchField]}
          </Select.Option>
        })
        }
      </Select>
      <Icon type="search" onClick={this.showModal}/>
      {value && <Icon type="delete"  onClick={()=>{this.setState({data: []}, ()=>{handleChange("")})}}/>}
      {visible &&
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.showModal}
          footer={[
                     <Button key="back" size="large" onClick={this.showModal}>Return</Button>,
                     <Button key="submit" type="primary" size="large"
                        disabled={selRow[pk]?false:true}
                        onClick={this.handleOk}>
                         Select
                       </Button>,
                   ]}>
          <Grid config={configs[searchTable]} params={params}
           options={{
            onCellClicked: this.selectRow,
            onCellDoubleClicked: this.rowDoubleClick,
          }}/>
        </Modal>
      }

    </div>
  }
}

@TypeView
export class RelationTypeView extends Component {
  render() {
    const {value} = this.props;
    return <div>{value}</div>
  }
}

const RelationTypeConfig = {
  ...TypeConfig,
  type: 'RelationType'
}
export default RelationTypeConfig;
