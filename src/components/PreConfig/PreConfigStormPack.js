import React, {Component} from 'react';
import { Button } from 'react-bootstrap';


class PreConfigButton extends Component {

  _handleClick() {
    const parts = {}
    parts['1'] = this.props.data.webtrusses[0]
    parts['3'] = this.props.data.footprints[0]
    parts['5'] = this.props.data.flysheets[0]
    parts['9'] = this.props.data.poles[0]
    parts['10'] = this.props.data.poles[1]
    parts['12'] = this.props.data.accessories[0]

    console.log('>>>>>> PRE CONFIG: ', parts);
    this.props.showNext();
    this.props.partStateConfig(parts);
  }

  render () {

    let buttonText = 'lightweight StormPack'
    let bsStyle='info'

    const partButton = <Button className='add-margin2' onClick={this._handleClick.bind(this)} bsStyle={bsStyle}>{buttonText} </Button>

    return (
      partButton
    );
  }
}

export default PreConfigButton;
