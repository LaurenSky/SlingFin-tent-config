import React from 'react';

import Volume from './volume';
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
          <li><h4>2 Person Tent</h4></li>
          <li><h4>2 Side Doors with Dry Entries</h4></li>
          <li><h4>Length: 92.25" long</h4></li>
          <li><h4>Interior Height: 41.5in</h4></li>
          <li><h4>Floor Area: 32 ft^2 / 2.97m^2</h4></li>
          <li><Volume data={this.props.data}/></li>
          <li><h4>Vestibules: 2 (11 sq ft + 11 sq ft)</h4></li>
          <li><PackSize data={this.props.data}/></li>
        </ul>
      </div>
    );
  }
}

export default TentDimensions;
