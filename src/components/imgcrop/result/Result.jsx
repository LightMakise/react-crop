import React from 'react';
import "./Result.scss"
import { Select } from 'antd';
const { Option } = Select
class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showResultDom: false
    }
  }
  componentWillReceiveProps(props) {
    // console.log('props', props);
    this.setState({
      showResultDom: props.showResultDom
    })
  }
  handleChange() {

  }
  render() {
    return (
      <div className={`result ${this.state.showResultDom ? '' : 'hide'}`}>
        <div className="imgbox">
          <img src="" id="resultImg" />
        </div>
      </div>
    )
  }
}
export default Result