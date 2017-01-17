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

    Object.entries(this.props.partsInCart).forEach(
      ([key, value]) => {
        console.log("in iterate!!!!" , key, value.partInfo)
        partWeightsInCart.push(value.partInfo.weight)
        console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- WEIGHT :' , partWeightsInCart)
      }
    );

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
        <h3>Current Weight:</h3>
        <h4>Minimum Trail Weight:  grams (___ oz)</h4>
        <h4>Total Pack Weight: { totalGrams } grams ({ totalOunces } oz)</h4>
      </div>
    );
  }
}

export default TrailWeight;
