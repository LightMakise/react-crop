import React from 'react';
import './Option.scss'
import { Table, Input, Select, Button, Popconfirm } from 'antd';
const { Option } = Select
class ImgOption extends React.Component {
  constructor(props) {
    super(props)
    let self = this
    this.state = {
      showOption: false,
      imgType: 'image/jpeg',
      columns: [
        {
          title: '参数',
          dataIndex: 'name',
          key: 'name',
          render: text => <span>{text}</span>,
        },
        {
          title: '值',
          dataIndex: 'value',
          key: 'value',
          render: (text, row, index) => {
            if (row.key !== '3') {
              return <Input value={text} key="input"></Input>
            }
            if (row.key === '3') {
              // return <Select defaultValue="PNG" style={{ width: 120 }} onChange={self.handleChange.bind(self)}>
              //   {Object.keys(global.imgType).forEach((item) => (
              //     <Option value={global.imgType[item]} key={item}>{item}</Option>
              //   ))}
              // </Select>
              return <Select key="Select" defaultValue={row.type} style={{ width: 120 }} onChange={self.handleChange.bind(self)}>
                <Option value="image/jpeg" key="0">JPEG</Option>
                <Option value="image/png" key="1">PNG</Option>
                <Option value="image/webp" key="2">WEBP</Option>
              </Select>
            }
          },
        },
      ],
      data: [
        {
          key: '1',
          name: '尺寸',
          value: '',
        },
        {
          key: '2',
          name: '剪裁后大小',
          value: '',
        },
        {
          key: '3',
          name: '格式',
          type: 'JPEG'
        },
      ]
    }
  }
  handleChange(v) {
    this.setState({
      imgType: v
    })
    this.props.setImgType(v)
  }
  delImg() {
    this.props.delImg()
    this.setState({
      showOption: false
    })
  }
  save() {
    this.props.save(this.state.imgType)
  }
  loadingImgFinish() {
    this.setState({
      showOption: true
    })
  }
  getImgSize() {
    let resultDom = document.querySelector("#resultImg")
    // console.log('resultDom', resultDom);
    let baseStr = resultDom.src, tag = "base64,";
    baseStr = baseStr.substring(baseStr.indexOf(tag) + tag.length);
    let eqTagIndex = baseStr.indexOf("=");
    baseStr = eqTagIndex !== -1 ? baseStr.substring(0, eqTagIndex) : baseStr;
    let strLen = baseStr.length;
    let fileSize = strLen - (strLen / 8) * 2
    let fileSizeToKb = parseFloat(Number(fileSize) / 1024).toFixed(2) + "KB"
    // console.log('fileSizeToKb', fileSizeToKb);
    return fileSizeToKb
  }
  cutFinish() {
    // console.log('cutFinish');
    let resultDom = document.querySelector("#resultImg")
    let data = this.state.data
    data[0].value = resultDom.width + "x" + resultDom.height
    data[1].value = this.getImgSize()
    this.setState({
      data
    })
  }
  selectFile() {
    this.props.selectFile()
  }
  render() {
    return (
      <div className={`option ${this.state.showOption ? '' : 'hide'}`}>
        <Table columns={this.state.columns} dataSource={this.state.data} />
        <Button onClick={this.save.bind(this)} type="primary" style={{marginRight:'20px'}}>保存</Button>
        <Popconfirm placement="top" title={'确认清除吗？？'} onConfirm={this.delImg.bind(this)} okText="是" cancelText="否">
          <Button type="danger">清除</Button>
        </Popconfirm>
      </div>
    )
  }
}
export default ImgOption