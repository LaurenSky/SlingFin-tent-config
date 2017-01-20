import React from 'react';

import Volume from './volume';
import PackSize from './pack-size';
import { Accordion, Panel } from 'react-bootstrap';
import '../Accordion/accordion.css';


class TentDimensions extends React.Component {

  render () {

    return (
      <Accordion>
        <Panel bsStyle='custom' header='CrossBow2 Dimensions' eventKey='1'>
          <div className='tent-details'>
            <ul>
              <li><h5>2 Person Tent</h5></li>
              <li><h5>2 Side Doors with Dry Entries</h5></li>
              <li><h5>Length: 92.25" long</h5></li>
              <li><h5>Interior Height: 41.5in</h5></li>
              <li><h5>Floor Area: 32 ft^2 / 2.97m^2</h5></li>
              <li><Volume data={this.props.data}/></li>
              <li><h5>Vestibules: 2 (11 sq ft + 11 sq ft)</h5></li>
              <li><PackSize data={this.props.data}/></li>
            </ul>
          </div>
        </Panel>
      </Accordion>
    );
  }
}

export default TentDimensions;
