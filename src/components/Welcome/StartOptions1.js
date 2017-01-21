import React, {Component} from 'react';
import '../../App.css';
import { Button } from 'react-bootstrap';
let FontAwesome = require('react-fontawesome');

import AccordionPanelItems from '../Accordion/accordion'
import PreConfigOptions from './PreConfigOptions';

const styles = {
  active: {
    display: 'inherit'
  },

  inactive: {
    display: 'none'
  }
};

class StartOptions extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      show: false
    };
    this.setTrue = this.setTrue.bind(this);
    this.setFalse = this.setFalse.bind(this);
  }

  setTrue() {
    console.log('Im in set true')
    this.setState({
      active: true,
      show: false
    })
  }

  setFalse() {
    this.setState({
      active: false,
      show: true
    });
  }

  preConfigHandleClick() {
    this.setTrue()
  }

  customizeHandleClick() {
    this.setFalse()
  }

  render () {
    const stateStyle = this.state.active ? styles.active : styles.inactive;
    const showMeStyle = this.state.show ? styles.active : styles.inactive;


    const preConfigButton = <Button className='add-margin3' onClick={this.preConfigHandleClick.bind(this)} bsStyle='success'>Start with a Pre-Configuration</Button>

    const customizeButton = <Button className='add-margin3' onClick={this.customizeHandleClick.bind(this)} bsStyle='success'>Customize My Own From Scratch</Button>

    const options = <div style={stateStyle}><PreConfigOptions data={this.props.data} partStateConfig={this.props.partStateConfig} /></div>

    // const instructions = <div style={showMeStyle} className='go add-padding'><FontAwesome className="fa fa-long-arrow-right" name='go-arrow' aria-hidden="true" /> Go to Next Step: (1)WebTruss.</div>

    return (
      <div>
        {preConfigButton}
        {customizeButton}
        {options}
        <section style={showMeStyle}>
          <AccordionPanelItems className='tent-details' data={this.props.data} partStateUpdate={this.props.partStateUpdate} partsInCart={this.props.partsInCart}/>
        </section>
      </div>
    );
  }
}

export default StartOptions;
