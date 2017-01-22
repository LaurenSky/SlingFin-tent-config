import React from 'react';

import Volume from './volume';
import PackSize from './pack-size';
// import './accordion.css';


const styles = {
  active: {
    display: 'inherit'
  },

  inactive: {
    display: 'none'
  }
};

class TentDimensions extends React.Component {

  constructor() {
    super();
    this.state = {
      active: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active:!this.state.active
    });
  }


  render () {
    const stateStyle = this.state.active ? styles.active : styles.inactive;

    return (
      <div>
        <h3 onClick={this.toggle} className='cart-header'>CrossBow2 Dimensions</h3>
        <ul style={stateStyle}  className='tent-details'>
          <li><h5>2 Person Tent</h5></li>
          <li><h5>2 Side Doors with Dry Entries</h5></li>
          <li><h5>Length: 92.25" long</h5></li>
          <li><h5>Interior Height: 41.5"</h5></li>
          <li><h5>Floor Area: 32 ft^2 ( 2.97m^2 )</h5></li>
          <li><Volume data={this.props.data}/></li>
          <li><h5>Vestibules: 2 (11 sq ft + 11 sq ft)</h5></li>
          <li><PackSize data={this.props.data}/></li>
        </ul>
      </div>
    );
  }
}

export default TentDimensions;
