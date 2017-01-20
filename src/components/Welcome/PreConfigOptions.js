import React, {Component} from 'react';
import '../../App.css';
import { Row, Col } from 'react-bootstrap';

import PreConfigBackpacking from '../PreConfig/PreConfigBackpacking';
import PreConfigMountain from '../PreConfig/PreConfigMountain';
import PreConfigStormPack from '../PreConfig/PreConfigStormPack';
import ClearButton from '../PreConfig/Clear';
let FontAwesome = require('react-fontawesome');



class StartOptions extends Component {

  render () {

    return (
      // <Col xs={12} md={6} className="alert-box bkgrd add-margin add-padding">
      <div className='options'>
        <h5 className='configuration-title'>Select a Pre-Configuration:</h5>
        <PreConfigBackpacking data={this.props.data} partStateConfig={this.props.partStateConfig} />
        <PreConfigMountain data={this.props.data} partStateConfig={this.props.partStateConfig} />
        <PreConfigStormPack data={this.props.data} partStateConfig={this.props.partStateConfig} />
        <ClearButton data={this.props.data} partStateConfig={this.props.partStateConfig} />
        <div className='go add-padding'><FontAwesome className="fa fa-long-arrow-right" name='go-arrow' aria-hidden="true" /> Go to Next Step: (1)WebTruss.</div>
      </div>
      // </Col>
    );
  }
}

export default StartOptions;
