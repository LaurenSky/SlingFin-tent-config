import React from 'react';
import './accordion.css';
import PartCategory from './PartCategory';
import NumPoles from '../TentDetails/num-poles';

import { Accordion, Panel } from 'react-bootstrap';


class AccordionTest extends React.Component {
  render() {
    let color = {
          backgroundColor: 'placeholder so i can set my own color'
        }

    return(
      <Accordion>
          <Panel bsStyle={color} header='(1) WebTruss' eventKey='1'>
            <PartCategory data={this.props.data} category='WebTruss' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
          </Panel>

        <Panel bsStyle={color} header='(2) Poles' eventKey='2'>
          <NumPoles part='Poles' partsInCart={this.props.partsInCart} />
          <PartCategory data={this.props.data} category='Poles' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel bsStyle={color} header='(3) Footprints' eventKey='3'>
          <PartCategory data={this.props.data} category='FootPrint' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel bsStyle={color} header='(4) Flysheets' eventKey='4'>
          <PartCategory data={this.props.data} category='Flysheet' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel bsStyle={color} header='(5) Inner Tent Bodies' eventKey='5'>
          <PartCategory data={this.props.data} category='InnerTentBodies' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel bsStyle={color} header='(6) Accessories' eventKey='6'>
          <PartCategory data={this.props.data} category='Accessories' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>
      </Accordion>
    )
  }
}

  // ReactDOM.render(accordionInstance, mountNode);
export default AccordionTest;
