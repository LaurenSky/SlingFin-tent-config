import React from 'react';
// import './accordion.css';


class TrailWeight extends React.Component {

  constructor() {
    super();
    this.state = {
      // active: false
    };
  }

  calculateWeight(webtruss, flysheet, innerTentBody) {
    console.log('caluclating weight');
    return(
      ">>>>>>>>>>>"
    )
  }

  render () {


    return (
      <div>
        <h4>Minimum Trail Weigth Test:  oz (___ pounds)</h4>
        <h4>Minimum Trail Weigth Test: calculating....  oz (___ pounds)</h4>
      </div>
    );
  }
}

// Accordion.propTypes = {
//   weight: React.PropTypes.number.isRequired,
// };

export default TrailWeight;
