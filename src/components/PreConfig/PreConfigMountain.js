import React, {Component} from 'react';
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

    this.props.partStateConfig(parts);
    this.props.showNext();
  }

  render () {

    let buttonText = 'All Season Mountain'
    let bsStyle='info'

    const partButton = <Button className='add-margin2 ' onClick={this._handleClick.bind(this)} bsStyle={bsStyle}>{buttonText} </Button>

    return (
      partButton
    );
  }
}

export default PreConfigMountain;
