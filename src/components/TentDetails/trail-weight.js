import React from 'react';
let money = require("money-math");


class TrailWeight extends React.Component {

  convertToOunces(grams) {
    let ounces = money.mul(grams, "00.035274");
    let ounces1 = money.div(ounces, "10000.00");

    return ounces1;
  }

  render () {
    let partWeightsInCart = [];
    let props = this.props.partsInCart

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          console.log("in iterate!!!!" , key, value.partInfo)
          partWeightsInCart.push(value.partInfo.weight)
          console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- WEIGHT :' , partWeightsInCart)
        }
      );
    }


    let totalGrams = '0.00'

    for (let i = 0 ; i < partWeightsInCart.length; i++) {
      console.log('<<<<>>>>>>>>> IN WEIGHT ---- TOTAL-WEIGHT :' , totalGrams)
      console.log('<<<<>>>>>>>>> IN WEIGHT ---- TOTAL-WEIGHT :' , partWeightsInCart[i])
      totalGrams = money.add(totalGrams, partWeightsInCart[i])
    }

    console.log('<<<<>>>>>>>>> IN WEIGHT ---- TOTAL-WEIGHT :' , totalGrams)

    this.convertToOunces.bind(this)
    let totalOunces = this.convertToOunces(totalGrams);

    return (
      <div>
        <h5>Minimum Trail Weight:</h5>
        <h7>grams (___ oz)</h7>
      </div>
    );
  }
}

export default TrailWeight;
