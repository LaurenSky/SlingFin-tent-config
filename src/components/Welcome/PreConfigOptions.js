import React, {Component} from 'react';
import '../../App.css';
import { Row, Col } from 'react-bootstrap';

import PreConfigBackpacking from '../PreConfig/PreConfigBackpacking';
import PreConfigMountain from '../PreConfig/PreConfigMountain';
import PreConfigStormPack from '../PreConfig/PreConfigStormPack';
import ClearButton from '../PreConfig/Clear';


class StartOptions extends Component {

  render () {

    return (
      <Col xs={6} md={6} className="alert-box bkgrd add-margin add-padding">
        <h5 className='configuration-title'>Start with a Preconfiguration</h5>
        <PreConfigBackpacking data={this.props.data} partStateConfig={this.props.partStateConfig} />
        <PreConfigMountain data={this.props.data} partStateConfig={this.props.partStateConfig} />
        <PreConfigStormPack data={this.props.data} partStateConfig={this.props.partStateConfig} />
        <ClearButton data={this.props.data} partStateConfig={this.props.partStateConfig} />
      </Col>
    );
  }
}

export default StartOptions;
