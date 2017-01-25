import React from 'react';
// import './accordion.css';


class PackSize extends React.Component {

  constructor() {
    super();
    this.state = {
      // active: false
    };
  }

  render () {

    return (
      <div>
        <h5><strong>Packed Size: </strong>14" x 6"</h5>
      </div>
    );
  }
}

// Accordion.propTypes = {
//   weight: React.PropTypes.number.isRequired,
// };

export default PackSize;
