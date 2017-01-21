import React, {Component} from 'react';
import '../../App.css';
import { Button } from 'react-bootstrap';

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

    this.clearPartsInCart = this.clearPartsInCart.bind(this);
  }

  clearPartsInCart() {
    const parts = false
    this.props.partStateConfig(parts)

  }

  preConfigHandleClick() {
    console.log('Im in set true')
    this.setState({
      active: true,
      show: true
    })
  }

  customizeHandleClick() {
    this.setState({
      active: false,
      show: true
    });
    this.clearPartsInCart()
  }

  render () {
    const stateStyle = this.state.active ? styles.active : styles.inactive;
    const showMeStyle = this.state.show ? styles.active : styles.inactive;


    const preConfigButton = <Button className='add-margin3' onClick={this.preConfigHandleClick.bind(this)} bsStyle='success'>Start with a Pre-Configuration</Button>

    const customizeButton = <Button className='add-margin3' onClick={this.customizeHandleClick.bind(this)} bsStyle='success'>Customize My Own From Scratch</Button>

    const options = <div style={stateStyle}><PreConfigOptions data={this.props.data} partStateConfig={this.props.partStateConfig} /></div>

    return (
      <div>
        <section className='initial-options-buttons'>
          <h4 className='configuration-title'>How would you like to start?</h4>
          {preConfigButton}
          {customizeButton}
        </section>
        {options}
        <section className='accordion' style={showMeStyle}>
          <AccordionPanelItems data={this.props.data} partStateUpdate={this.props.partStateUpdate} partsInCart={this.props.partsInCart}/>
        </section>
      </div>
    );
  }
}

export default StartOptions;
