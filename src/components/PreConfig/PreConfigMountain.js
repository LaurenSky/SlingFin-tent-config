import React, {Component} from 'react';
// import './accordion.css';
import { Button } from 'react-bootstrap';


class PreConfigMountain extends Component {

  _handleClick() {
    const parts = {}
    parts['1'] = this.props.data.webtrusses[0]
    parts['6'] = this.props.data.innerTentBodies[0]
    parts['5'] = this.props.data.flysheets[0]
    parts['9'] = this.props.data.poles[0]
    parts['10'] = this.props.data.poles[1]
    parts['12'] = this.props.data.accessories[0]

    console.log('>>>>>> PRE CONFIG: ', parts)
    this.props.partStateConfig(parts)
  }

  render () {

    let buttonText = 'All Season Mountain'
    let bsStyle='success'

    const partButton = <Button className='add-margin2' onClick={this._handleClick.bind(this)} bsStyle={bsStyle}>{buttonText} </Button>

    return (
      partButton
    );
  }
}

export default PreConfigMountain;
