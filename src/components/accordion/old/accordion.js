import React from 'react';
import '../accordion.css';
import PartCategory from '../PartCategory';


import { Accordion, Panel } from 'react-bootstrap';


class AccordionTest extends React.Component {
  render() {

    return(
      <Accordion>
        <Panel header="Collapsible Group Item #1" eventKey="1">
          <PartCategory data={this.props.data} category='WebTruss' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel header="Collapsible Group Item #2" eventKey="2">
          <PartCategory data={this.props.data} category='Poles' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel header="Collapsible Group Item #3" eventKey="3">
          <PartCategory data={this.props.data} category='FootPrint' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel header="Collapsible Group Item #3" eventKey="3">
          <PartCategory data={this.props.data} category='Flysheet' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>

        <Panel header="Collapsible Group Item #3" eventKey="3">
          <PartCategory data={this.props.data} category='InnerTentBodies' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>
        <Panel header="Collapsible Group Item #3" eventKey="3">
          <PartCategory data={this.props.data} category='Accessories' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partsInCart} />
        </Panel>
      </Accordion>
    )
  }
}

  // ReactDOM.render(accordionInstance, mountNode);
export default AccordionTest;
