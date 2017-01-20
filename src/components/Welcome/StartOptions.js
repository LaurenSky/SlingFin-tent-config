import React, {Component} from 'react';
import '../../App.css';
import { Button } from 'react-bootstrap';

import PreConfigOptions from './PreConfigOptions';


class StartOptions extends Component {
  constructor (props) {
    super(props);

    this.state = {
      show: false
    }
  }

  preConfigHandleClick() {
    console.log("Im in preConfigHandleClick");
    return true
  }

  customizeHandleClick() {
    console.log("Im in customizeHandleClick");
    return false
  }

  render () {

    let buttonText = '3 Season Backpacking'
    let bsStyle='success'

    const preConfigButton = <Button className='add-margin2' onClick={this.preConfigHandleClick.bind(this)} bsStyle='success'>Pre-Configurations</Button>

    const CustomizeButton = <Button className='add-margin2' onClick={this.customizeHandleClick.bind(this)} bsStyle='success'>Customize</Button>

    return (
      <div>
        {preConfigButton}
        {CustomizeButton}
        <PreConfigOptions data={this.props.data} partStateConfig={this.props.partStateConfig}/>
      </div>
    );
  }
}

export default StartOptions;
