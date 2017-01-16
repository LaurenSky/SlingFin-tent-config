import React from 'react';
// import './accordion.css';


class TrailWeight extends React.Component {

  constructor() {
    super();
    this.state = {
      // active: false
    };
  }

  calculateWeight() {
    console.log('caluclating weight');
    return(
      ">>>>>>>>>>>"
    )
  }

  render () {
    // const data=this.props.data;
    var finalWeight=this.calculateWeight

    // let partsInCart = [];
    //
    // Object.entries(this.props.parts).forEach(
    //   ([key, value]) => {
    //     console.log("in iterate!!!!" , key, value.partInfo)
    //     partsInCart.push(value.partInfo)
    //     // console.log('MY PART ARRAY:' , partsInCart)
    //   }
    // );

    return (
      <div>
        <h4>Minimum Trail Weigth:  oz (___ pounds)</h4>
        <h4>Minimum Trail Weigth: calculating.... {finalWeight()} oz (___ pounds)</h4>
      </div>
    );
  }
}

// Accordion.propTypes = {
//   weight: React.PropTypes.number.isRequired,
// };

export default TrailWeight;
