import React, {Component} from 'react';
import '../../App.css';

import PreConfigBackpacking from '../PreConfig/PreConfigBackpacking';
import PreConfigMountain from '../PreConfig/PreConfigMountain';
import PreConfigStormPack from '../PreConfig/PreConfigStormPack';
// let FontAwesome = require('react-fontawesome');
// <div className='go add-padding'><FontAwesome className="fa fa-long-arrow-right" name='go-arrow' aria-hidden="true" /> Go to Next Step: (1)WebTruss.</div>



class StartOptions extends Component {

  _handleClick() {
    this.props.showAccordion();
  }

  render () {

    return (
      <div className='options'>
        <h5 className='configuration-title'>Select a Pre-Configuration:</h5>
        <PreConfigBackpacking data={this.props.data} partStateConfig={this.props.partStateConfig} showNext={this._handleClick.bind(this)} />
        <PreConfigMountain data={this.props.data} partStateConfig={this.props.partStateConfig} showNext={this._handleClick.bind(this)} />
        <PreConfigStormPack data={this.props.data} partStateConfig={this.props.partStateConfig} showNext={this._handleClick.bind(this)} />
      </div>
    );
  }
}

export default StartOptions;
