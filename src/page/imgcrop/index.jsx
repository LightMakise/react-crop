import React from 'react';
// import logo from './logo.svg';
import './index.scss';
import Imgcrop from '../../components/imgcrop/Imgcrop.jsx';
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="imgcrop-page">
        <Imgcrop></Imgcrop>
      </div>
    );
  }
}
export default Index;
