import React from 'react';

import TrailWeight from './trail-weight';
import PeakHeight from './peak-height';
import Cost from './cost';
import SquareFootage from './square-footage';
import PackSize from './pack-size';

import TrailWeightTest from './trail-weight-test';



// import './accordion.css';


class TentDetails extends React.Component {

  constructor() {
    super();
    this.state = {
      // active: false
    };
    // this.toggle = this.toggle.bind(this);
  }

  // toggle() {
  //   this.setState({
  //     active:!this.state.active
  //   });
  // }

  render () {
    // const stateStyle = this.state.active ? styles.active : styles.inactive;

    return (
      <div>
        <TrailWeight data={this.props.data}/>
        <TrailWeightTest webtrusses={this.props.data.webtrusses} flysheet={this.props.data.flysheets} innerTentBodies={this.props.data.innerTentBodies}/>
        <Cost data={this.props.data}/>
        <SquareFootage data={this.props.data}/>
        <PackSize data={this.props.data}/>

        <PeakHeight />
        <h4># Doors: 2(side)</h4>
        <h4>COMFORT: ____ /5(sleeping on clouds)</h4>
      </div>
    );
  }
}

export default TentDetails;
