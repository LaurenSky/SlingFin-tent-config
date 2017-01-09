import React from 'react';
// import './accordion.css';


class Cost extends React.Component {

  constructor() {
    super();
    this.state = {
      // active: false
    };
  }

  render () {

    return (
      <div>
        <h4>PRICE: $____</h4>
      </div>
    );
  }
}

// Accordion.propTypes = {
//   weight: React.PropTypes.number.isRequired,
// };

export default Cost;
