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
    const webtrusses=this.props.webtrusses;
    const flysheets=this.props.flysheets;
    const innerTentBodies=this.props.innerTentBodies;
    var finalWeight=this.calculateWeight

    return (
      <div>
        <h4>Minimum Trail Weigth Test: {webtrusses[0].weight} oz (___ pounds)</h4>
        <h4>Minimum Trail Weigth Test: calculating.... {finalWeight(webtrusses, flysheets, innerTentBodies)} oz (___ pounds)</h4>
      </div>
    );
  }
}

// Accordion.propTypes = {
//   weight: React.PropTypes.number.isRequired,
// };

export default TrailWeight;
