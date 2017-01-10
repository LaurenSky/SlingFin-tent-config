import React from 'react';
// import './accordion.css';


class SquareFootage extends React.Component {

  constructor() {
    super();
    this.state = {
      // active: false
    };
  }

  render () {

    return (
      <div>
        <h4>Floor Area: 32 ft^2 / 2.97m^2</h4>
        <li><h4>Total Volume: 108.6 cu ft / 3.08 cu m</h4></li>
        <ul>
          <li><h5>Body Volume: 58.6 cu ft / 1.66 cu m</h5></li>
          <li><h5>Vestibule Volume: 50.0 cu ft / 1.42 cu m</h5></li>
        </ul>
      </div>
    );
  }
}

// Accordion.propTypes = {
//   weight: React.PropTypes.number.isRequired,
// };

export default SquareFootage;
