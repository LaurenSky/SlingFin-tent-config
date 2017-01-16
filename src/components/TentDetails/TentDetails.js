import React from 'react';

import TrailWeight from './trail-weight';
import NumPoles from './num-poles';
import Cost from './cost';

import TrailWeightTest from './trail-weight-test';


class TentDetails extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     // active: false
  //   };
  //   // this.toggle = this.toggle.bind(this);
  // }

  // toggle() {
  //   this.setState({
  //     active:!this.state.active
  //   });
  // }

  render () {
    // const stateStyle = this.state.active ? styles.active : styles.inactive;

    return (
      <div className='tent-details'>
        <h5>Variable Items</h5>
        <ul>
          <li><TrailWeight partsInCart={this.props.partsInCart} /></li>
          <li><TrailWeightTest partsInCart={this.props.partsInCart} /></li>
          <li><Cost partsInCart={this.props.partsInCart} /></li>
          <li><NumPoles partsInCart={this.props.partsInCart} /></li>
        </ul>
      </div>
    );
  }
}


export default TentDetails;
