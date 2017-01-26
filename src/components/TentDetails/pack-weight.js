import React from 'react';
let money = require("money-math");


class PackWeight extends React.Component {

  convertToOunces(grams) {
    let ounces = money.mul(grams, "00.035274");
    let ounces1 = money.div(ounces, "10000.00");

    return ounces1;
  }

  render () {
    let partWeightsInCart = [];

    Object.entries(this.props.partsInCart).forEach(
      ([key, value]) => {
        partWeightsInCart.push(value.partInfo.weight)
      }
    );

    let totalGrams = '0.00'

    for (let i = 0 ; i < partWeightsInCart.length; i++) {
      totalGrams = money.add(totalGrams, partWeightsInCart[i])
    }

    this.convertToOunces.bind(this)
    let totalOunces = this.convertToOunces(totalGrams);

    return (
      <div>
        <h5>Total Pack Weight:</h5>
        <h7>{ totalGrams } grams ({ totalOunces } oz)</h7>
      </div>
    );
  }
}

export default PackWeight;
