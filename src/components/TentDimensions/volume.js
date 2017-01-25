import React from 'react';
// import './accordion.css';


class Volume extends React.Component {

  constructor() {
    super();
    this.state = {
      // active: false
    };
  }

  render () {

    return (
      <div>
        <h5><strong>Total Volume: </strong>108.6 cu ft (3.08 cu m)</h5>
        <ul>
          <li><h6><strong>Body Volume: </strong>58.6 cu ft (1.66 cu m)</h6></li>
          <li><h6><strong>Vestibule Volume: </strong>50.0 cu ft (1.42 cu m)</h6></li>
        </ul>
      </div>
    );
  }
}

export default Volume;
