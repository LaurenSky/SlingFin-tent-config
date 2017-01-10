import React from 'react';

import SquareFootage from './square-footage';
import PackSize from './pack-size';


// import './accordion.css';


class TentDimensions extends React.Component {

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
        <h3>Dimensions</h3>
        <ul>
          <li><h4>Doors: 2 side doors with dry entries</h4></li>
          <li><h4>Length: 92.25" long</h4></li>
          <li><h4>Interior Height: 41.5in</h4></li>
          <li><h4>Total Volume: 108.6 cu ft / 3.08 cu m</h4></li>
          <li><SquareFootage data={this.props.data}/></li>
          <li><h4>Vestibules: 2 (11 sq ft + 11 sq ft)</h4></li>
          <li><PackSize data={this.props.data}/></li>
        </ul>
      </div>
    );
  }
}

export default TentDimensions;
