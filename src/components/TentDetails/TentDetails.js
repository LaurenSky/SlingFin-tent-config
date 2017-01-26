import React from 'react';

import TrailWeight from './trail-weight';
import NumPoles from './num-poles';
import Cost from './cost';


class TentDetails extends React.Component {

  render () {

    return (
      <div className='tent-details'>
        <h5>Variable Items</h5>
        <ul>
          <li><Cost partsInCart={this.props.partsInCart} /></li>
          <li><TrailWeight partsInCart={this.props.partsInCart} /></li>
          <li><NumPoles partsInCart={this.props.partsInCart} /></li>
        </ul>
      </div>
    );
  }
}


export default TentDetails;
