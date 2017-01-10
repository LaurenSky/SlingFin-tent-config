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
        <h4>Total Volume: 108.6 cu ft / 3.08 cu m</h4>
        <ul>
          <li><h5>Body Volume: 58.6 cu ft / 1.66 cu m</h5></li>
          <li><h5>Vestibule Volume: 50.0 cu ft / 1.42 cu m</h5></li>
        </ul>
      </div>
    );
  }
}

export default Volume;
