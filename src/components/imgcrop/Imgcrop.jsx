import React from 'react';
import './Imgcrop.scss';
import Droparea from './droparea/Droparea.jsx'
import Option from './option/Option.jsx'
import Result from './result/Result.jsx';

class Imgcrop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showResultDom: false,
      img:{
        width:0,
        height:0
      }
    }
  }
  /**
   * 删除图片 并 重置结果区域
   */
  delImg() {
    this.droparea.delImg()
    this.setState({
      showResultDom: false
    })
  }
  /**
   * 保存剪裁后的图片
   */
  save() {
    this.droparea.save()
  }
  /**
   * 图片加载完成并 显示结果区域
   */
  loadingImgFinish({width, height}) {
    this.option.loadingImgFinish()
    this.setState({
      img:{
        width,
        height
      }
    })
    this.showResult()
  }
  showResult() {
    this.setState({
      showResultDom: true
    })
  }
  /**
   * 手动选择文件
   */
  selectFile() {
    this.droparea.selectFile()
  }
  /**
   * 剪裁完成
   */
  cutFinish() {
    this.option.cutFinish()
  }
  setImgType(v) {
    this.droparea.setImgType(v)
  }
  render(e) {
    return (
      <div className="imgcrop">
        <Droparea cutFinish={this.cutFinish.bind(this)} selectFile={this.selectFile.bind(this)} size={10 * 1024 * 1024} ref={r => { this.droparea = r }} loadingImgFinish={this.loadingImgFinish.bind(this)} showResult={this.showResult.bind(this)}></Droparea>
        <Result showResultDom={this.state.showResultDom} img={this.state.img} ref={r => this.result = r}></Result>
        <div className="clear"></div>
        <Option setImgType={this.setImgType.bind(this)}selectFile={this.selectFile.bind(this)} delImg={this.delImg.bind(this)} save={this.save.bind(this)} ref={r => { this.option = r }}></Option>
      </div>
    )
  }
}
export default Imgcrop