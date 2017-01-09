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
        <h4>Sq. Footage:</h4>
        <h5>Body: ____</h5>
        <h5>Vestibule: ____</h5>
      </div>
    );
  }
}

// Accordion.propTypes = {
//   weight: React.PropTypes.number.isRequired,
// };

export default SquareFootage;
