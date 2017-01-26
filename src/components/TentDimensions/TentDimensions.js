import React from 'react';
import Volume from './volume';
import PackSize from './pack-size';


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
          <li><h5><strong>2 Person Tent</strong></h5></li>
          <li><h5><strong>2 Side Doors with Dry Entries</strong></h5></li>
          <li><h5><strong>Length:</strong> 92.25" long</h5></li>
          <li><h5><strong>Interior Height: </strong>41.5"</h5></li>
          <li><h5><strong>Floor Area: </strong>32 ft^2 ( 2.97m^2 )</h5></li>
          <li><Volume data={this.props.data}/></li>
          <li><h5><strong>Vestibules: </strong>2 (11 sq ft + 11 sq ft)</h5></li>
          <li><PackSize data={this.props.data}/></li>
        </ul>
      </div>
    );
  }
}

export default TentDimensions;
