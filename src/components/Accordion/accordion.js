import React from 'react';
import './accordion.css';
import PartCategory from './PartCategory';
import HasWebTruss from './Messages/HasWebTruss';
import NumPoles from './Messages/HasPoles';
import HasFlysheet from './Messages/HasFlysheet';
import HasInnerTentBodies from './Messages/HasInnerTentBodies';
import HasFootprint from './Messages/HasFootprint';
import HasAccessories from './Messages/HasAccessories';



import { Accordion, Panel } from 'react-bootstrap';


class AccordionTest extends React.Component {
  render() {
    let color = {
          backgroundColor: 'placeholder so i can set my own color'
        }

    return(
      <Accordion>
        <Panel bsStyle={color} header='(1) WebTruss' eventKey='1'>
          <HasWebTruss partsInCart={this.props.partsInCart} />
          <PartCategory data={this.props.data} category='WebTruss' partStateUpdate={this.props.partStateUpdate}partInCart={this.props.partsInCart} />
        </Panel>

        <Panel bsStyle={color} header='(2) Poles' eventKey='2'>
          <NumPoles partsInCart={this.props.partsInCart} />
          <PartCategory data={this.props.data} category='Poles' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel bsStyle={color} header='(3) Flysheets' eventKey='4'>
          <HasFlysheet partsInCart={this.props.partsInCart} />
          <PartCategory data={this.props.data} category='Flysheet' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel bsStyle={color} header='(4) Inner Tent Bodies' eventKey='5'>
          <HasInnerTentBodies partsInCart={this.props.partsInCart} />
          <PartCategory data={this.props.data} category='InnerTentBodies' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel bsStyle={color} header='(5) Footprints' eventKey='3'>
          <HasFootprint partsInCart={this.props.partsInCart} />
          <PartCategory data={this.props.data} category='FootPrint' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel bsStyle={color} header='(6) Accessories' eventKey='6'>
          <HasAccessories partsInCart={this.props.partsInCart} />
          <PartCategory data={this.props.data} category='Accessories' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>
      </Accordion>
    )
  }
}

  // ReactDOM.render(accordionInstance, mountNode);
export default AccordionTest;
