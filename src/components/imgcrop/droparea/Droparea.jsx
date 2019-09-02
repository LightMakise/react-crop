/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Droparea.scss';
import Cut from '../cut/Cut.jsx';
import Button from 'antd/es/button';
class Droparea extends React.Component {
  // 图片类型
  imgsType = ['image/jpeg', 'image/png', 'image/webp']
  // 图片大小
  imgsSize = 10 * 1024 * 1024
  imgReal = {
    width: '500px',
    height: '500px'
  }
  constructor(props) {
    // console.log('props', props)
    super(props);
    this.state = {
      imgReal: this.imgReal,
      limit: {}, // 当前dom的四个边界
      fileEnterArea: false, // 是否有文件进入区域
      imgUrl: '', // 图片地址 BASE64
      showCut: false // 是否显示剪裁区域
    }
  }
  componentDidMount() {

  }
  selectFile() {
    // console.log(this.fileInput)
    this.fileInput.click()
  }
  clickFile(e) {
    this.processFile(this.fileInput.files)
    this.fileInput.value = ''
  }
  delImg() {
    // console.log('delImg');
    this.cut.init()
    this.setState({
      imgReal: {
        width: '500px',
        height: '500px'
      },
      imgUrl: '',
      fileEnterArea: false,
      showCut: false,
    })
  }
  /**
   * 图片显示在页面
   */
  imgShow(imgUrl) {
    this.setState({
      imgUrl: imgUrl,
      showCut: true,
    })
    let droparea = document.querySelector('.droparea')
    setTimeout(() => {
      let limit = {
        left: droparea.offsetLeft,
        top: droparea.offsetTop,
        bottom: droparea.offsetTop + droparea.offsetHeight,
        right: droparea.offsetLeft + droparea.offsetWidth,
        width: droparea.offsetWidth,
        height: droparea.offsetHeight,
      }
      this.setState({
        limit: limit
      })
    })
    this.props.loadingImgFinish({ width: droparea.offsetWidth, height: droparea.offsetHeight})
    // this.cut.cutImg()
  }
  /**
   * 处理文件
   */
  processFile(files) {
    files = this.getFile(files)
    if (files.length === 0) return
    let file = new FileReader()
    file.readAsDataURL(files[0])
    // console.log('开始读取文件');
    file.onload = () => {
      // console.log('文件读取完成');
      this.imgShow(file.result)
      this.getImgReal(file.result)
    }
  }
  getImgReal(imgUrl) {
    var image = new Image();
    image.src = imgUrl;
    image.onload = () => {
      this.imgReal.width = image.width + 'px';
      this.imgReal.height = image.height + 'px';
      this.setState({
        imgReal: this.imgReal
      })
    }
  }
  /**
   * 获取文件
   */
  getFile(files) {
    let filesResult = []
    filesResult = Array.from(files).filter(file => {
      return this.checkFile(file)
    })
    return filesResult
  }
  /**
   * 校验文件类型
   */
  checkFile(file) {
    let type = file.type // 文件类型
    let size = file.size // 文件大小
    let res = true
    if (!this.imgsType.includes(type)) {
      res = false
      console.error(`文件不是图片类型 ${type}`);
    }
    if (size >= this.imgsSize) {
      res = false
      console.error(`文件超过${size}`);
    }
    return res
  }
  onDragOver(e) {
    e.preventDefault();
  }
  onDrop(arg, e) {
    e.preventDefault();
    if (this.state.imgUrl) return
    this.setState({
      fileEnterArea: false
    })
    this.processFile(e.dataTransfer.files)
  }
  /**
   * 文件进入
   */
  onDragEnter() {
    if (this.state.imgUrl) return
    this.setState({
      fileEnterArea: true
    })
  }
  /**
   * 文件离开
   */
  onDragLeave() {
    if (this.state.imgUrl) return
    this.setState({
      fileEnterArea: false
    })
  }
  save() {
    let img = document.querySelector('#result_img')
    // let type = 'image/png'
    // let imgURL = canvas.toDataURL(type)
    // console.log(imgURL);
    let aLink = document.createElement('a')
    aLink.download = '剪裁文件'
    aLink.href = img.src
    aLink.dataset.downloadUrl = [aLink.download, aLink.href].join(':')
    document.body.appendChild(aLink)
    aLink.click()
    document.body.removeChild(aLink)
  }
  cutFinish() {
    this.props.cutFinish()
  }
  setImgType(v) {
    this.cut.setImgType(v)
  }
  render(e) {
    return (
      <div
        className={`droparea ${this.state.fileEnterArea ? 'file-hover' : ''} ${this.state.showCut ? 'no-border' : ''}`}
        onDragOver={this.onDragOver.bind(this)}
        onDragEnter={this.onDragEnter.bind(this)}
        onDragLeave={this.onDragLeave.bind(this)}
        onDrop={this.onDrop.bind(this, e)}
        style={{
          width: this.state.imgReal.width,
          height: this.state.imgReal.height
        }}
      >

        <div className={`desc ${this.state.showCut ? 'hide' : ''}`}>
          <Button type="primary" onClick={this.selectFile.bind(this)} className="imgbtn">上传图片</Button>
          <span>或者选择一张图片拖拽到这里~</span>
        </div>
        <input className="hide" type='file' ref={r => this.fileInput = r} onChange={this.clickFile.bind(this)}></input>
        {this.state.imgUrl ? <img src={this.state.imgUrl} id="source" /> : null}
        <div className={`layer ${this.state.showCut ? '' : 'hide'}`}></div>
        <Cut cutFinish={this.cutFinish.bind(this)} limit={this.state.limit} showCut={this.state.showCut} imgUrl={this.state.imgUrl} ref={r => this.cut = r}></Cut>
      </div>
    )
  }
}
export default Droparea