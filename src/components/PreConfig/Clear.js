import React, {Component} from 'react';
import { Button } from 'react-bootstrap';


class PreConfigBackpacking extends Component {

  _handleClick() {
    const parts = false

    this.props.partStateConfig(parts)
  }

  render () {

    let buttonText = 'Clear'
    let bsStyle='danger'

    const partButton = <Button onClick={this._handleClick.bind(this)} bsStyle={bsStyle}>{buttonText} </Button>

    return (
      partButton
    );
  }
}

export default PreConfigBackpacking;
