import React from 'react';

import TrailWeight from './trail-weight';
import NumPoles from './num-poles';
import Cost from './cost';
import SquareFootage from './square-footage';
import PackSize from './pack-size';

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
        <h3>Variable Items</h3>
        <ul>
          <li><TrailWeight data={this.props.data}/></li>
          <li><TrailWeightTest webtrusses={this.props.data.webtrusses} flysheet={this.props.data.flysheets} innerTentBodies={this.props.data.innerTentBodies}/></li>
          <li><Cost data={this.props.data}/></li>
          <li><NumPoles /></li>
        </ul>

        <h3>Dimensions</h3>
        <ul>
          <li><h4>Doors: 2 side doors with dry entries</h4></li>
          <li><h4>Length: 92.25" long</h4></li>
          <li><h4>Interior Height: 41.5in</h4></li>
          <li><SquareFootage data={this.props.data}/></li>
          <li><h4>Vestibules: 2 (11 sq ft + 11 sq ft)</h4></li>
          <li><PackSize data={this.props.data}/></li>
        </ul>
      </div>
    );
  }
}

export default TentDetails;
