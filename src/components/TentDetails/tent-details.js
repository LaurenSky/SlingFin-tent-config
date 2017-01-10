import React from 'react';

import TrailWeight from './trail-weight';
import NumPoles from './num-poles';
import Cost from './cost';


import TrailWeightTest from './trail-weight-test';



// import './accordion.css';


class TentDetails extends React.Component {

  constructor() {
    super();
    this.state = {
      // active: false
    };
    // this.toggle = this.toggle.bind(this);
  }

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
          <li><TrailWeight data={this.props.data}/></li>
          <li><TrailWeightTest webtrusses={this.props.data.webtrusses} flysheet={this.props.data.flysheets} innerTentBodies={this.props.data.innerTentBodies}/></li>
          <li><Cost data={this.props.data}/></li>
          <li><NumPoles /></li>
        </ul>
      </div>
    );
  }
}

export default TentDetails;
