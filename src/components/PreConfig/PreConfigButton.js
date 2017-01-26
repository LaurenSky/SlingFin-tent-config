import React, {Component} from 'react';
import { Button } from 'react-bootstrap';


class PreConfigButton extends Component {
  defineParts(name) {
    let parts={};

    if (name='3 Season Backpacking') {
        parts['1'] = this.props.data.webtrusses[0]
        parts['7'] = this.props.data.innerTentBodies[2]
        parts['5'] = this.props.data.flysheets[0]
        parts['9'] = this.props.data.poles[0]
        parts['10'] = this.props.data.poles[1]
    } else if (name='4 Season Mountain') {
        parts['1'] = this.props.data.webtrusses[0]
        parts['6'] = this.props.data.innerTentBodies[1]
        parts['5'] = this.props.data.flysheets[0]
        parts['9'] = this.props.data.poles[0]
        parts['10'] = this.props.data.poles[1]
    } else if (name='Lightweight StormPack') {
        parts['1'] = this.props.data.webtrusses[0]
        parts['3'] = this.props.data.footprints[0]
        parts['5'] = this.props.data.flysheets[0]
        parts['9'] = this.props.data.poles[0]
        parts['10'] = this.props.data.poles[1]
    }

    return parts;
  }

  _handleClick() {
    this.defineParts.bind(this)
    let parts = this.defineParts(this.props.name)

    console.log('>>>>>> PRE CONFIG: ', parts)
    this.props.partStateConfig(parts)
  }

  render () {
    let bsStyle='success'
    let buttonText = this.props.name

    const partButton = <Button className='add-margin2' onClick={this._handleClick.bind(this)} bsStyle={bsStyle}>{buttonText} </Button>

    return (
      partButton
    );
  }
}

export default PreConfigButton;
