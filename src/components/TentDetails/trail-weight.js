import React from 'react';
let money = require("money-math");


class TrailWeight extends React.Component {

  convertToOunces(grams) {
    let ounces = money.mul(grams, "00.035274");
    let ounces1 = money.div(ounces, "10000.00");

    return ounces1;
  }

  addIfIncludesAll(partIds, parts, totalGrams) {
    for (let i = 0; i < partIds.length; i++) {
      // console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- PartWEIGHT :', partIds[i],' : ' , parts[partIds[i]])
      totalGrams = money.add(totalGrams, parts[partIds[i]])
      // console.log('<<<<>>>>>>>>> IN WEIGHT ---- TOTAL-WEIGHT :' , totalGrams)
    }
    return totalGrams;
  }

  render () {
    this.addIfIncludesAll.bind(this)
    let props = this.props.partsInCart
    let parts = {}
    let partIds
    let totalGrams = '0.00'

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          console.log("in iterate!!!!" , key, value.partInfo)
          // partWeightsInCart.push(value.partInfo.weight)
          parts[key] = value.partInfo.weight
          console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- WEIGHT :' , parts[key])
        }
      );
    }

    let partsInCart = Object.keys(parts)

    // console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- PartWEIGHT1 :' , parts)
    // console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- PartWEIGHT1 :' , Object.keys(parts))
    // console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- PartWEIGHT1 :' , partsInCart)

    if (partsInCart.length > 0) {

      if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('3') && partsInCart.includes('8') && partsInCart.includes('12') ) {
        // MeshDropInTrek
        partIds = ['1', '9', '5', '11', '3', '8', '12']
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('3') && partsInCart.includes('8') && partsInCart.includes('12') ) {
        // MeshDropInBow
        partIds = ['1', '9', '5', '10', '3', '8', '12']
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('3') && partsInCart.includes('12') ) {
        // StormpackTrek)
        partIds = ['1', '9', '5', '11', '3', '12']
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('3') && partsInCart.includes('12') ) {
        // StormpackBow)
        partIds = ['1', '9', '5', '10', '3', '12']
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('7') && partsInCart.includes('12') ) {
        // MeshTrek
        partIds = ['1', '9', '5', '11', '7', '12']
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('7') && partsInCart.includes('12') ) {
        // MeshBow
        partIds = ['1', '9', '5', '10', '7', '12']
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('6') && partsInCart.includes('12') ) {
        // RipstopTrek
        partIds = ['1', '9', '5', '11', '6', '12']
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('6') && partsInCart.includes('12') ) {
        // RipstopBow
        partIds = ['1', '9', '5', '10', '6', '12']
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)
      }
    }

    this.convertToOunces.bind(this)
    let totalOunces = this.convertToOunces(totalGrams);

    return (
      <div>
        <h5>Minimum Trail Weight:</h5>
        <h7>{ totalGrams } grams ({ totalOunces } oz)</h7>
      </div>
    );
  }
}

export default TrailWeight;
