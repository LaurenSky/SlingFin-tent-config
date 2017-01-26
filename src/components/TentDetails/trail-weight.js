import React from 'react';
let money = require("money-math");


class TrailWeight extends React.Component {

  convertToOunces(grams) {
    let holder = money.mul(grams, "00.035274");
    let ounces1 = money.div(holder, "10000.00");
    return ounces1;
  }

  convertToPounds(ounces) {
    let pounds = money.div(ounces, "16.00");
    return pounds;
  }

  convertToKiligrams(grams) {
    let kiligrams = money.div(grams, "1000.00");
    return kiligrams;
  }

  addIfIncludesAll(partIds, parts, totalGrams) {
    for (let i = 0; i < partIds.length; i++) {
      // console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- PartWEIGHT :', partIds[i],' : ' , parts[partIds[i]])
      totalGrams = money.add(totalGrams, parts[partIds[i]])
      // console.log('<<<<>>>>>>>>> IN WEIGHT ---- TOTAL-WEIGHT :' , totalGrams)
    }
    return totalGrams;
  }

  determineDisplay(totalGrams, totalOunces) {
    if(totalGrams !== '0.00') {
      let totalKiligrams = this.convertToKiligrams(totalGrams);
      let totalPounds = this.convertToPounds(totalOunces);

      return (<h7>{ totalKiligrams } kg ({ totalPounds } lb)</h7>)
    } else {
      return (<h7>( Add More Parts )</h7>)
    }
  }


  render () {
    this.determineDisplay.bind(this)
    this.addIfIncludesAll.bind(this)
    this.convertToKiligrams.bind(this)
    this.convertToPounds.bind(this)

    let props = this.props.partsInCart
    let parts = {}
    let partIds
    let totalGrams = '0.00'

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          // console.log("in iterate!!!!" , key, value.partInfo)
          // partWeightsInCart.push(value.partInfo.weight)
          parts[key] = value.partInfo.weight
          // console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- WEIGHT :' , parts[key])
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
        // partIds = ['1', '9', '5', '11', '3', '8', '12'] w/stakes
        partIds = ['1', '9', '5', '11', '3', '8'] //w/o stakes
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('3') && partsInCart.includes('8') && partsInCart.includes('12') ) {
        // MeshDropInBow
        // partIds = ['1', '9', '5', '10', '3', '8', '12'] w/stakes
        partIds = ['1', '9', '5', '10', '3', '8'] //w/o stakes
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('3') && partsInCart.includes('12') ) {
        // StormpackTrek)
        // partIds = ['1', '9', '5', '11', '3', '12']
        partIds = ['1', '9', '5', '11', '3'] //w/o stakes
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('3') && partsInCart.includes('12') ) {
        // StormpackBow)
        // partIds = ['1', '9', '5', '10', '3', '12']
        partIds = ['1', '9', '5', '10', '3']  //w/o stakes
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('7') && partsInCart.includes('12') ) {
        // MeshTrek
        // partIds = ['1', '9', '5', '11', '7', '12']
        partIds = ['1', '9', '5', '11', '7'] //w/o stakes
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('7') && partsInCart.includes('12') ) {
        // MeshBow
        // partIds = ['1', '9', '5', '10', '7', '12']
        partIds = ['1', '9', '5', '10', '7'] //w/o stakes
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('6') && partsInCart.includes('12') ) {
        // RipstopTrek
        // partIds = ['1', '9', '5', '11', '6', '12']
        partIds = ['1', '9', '5', '11', '6'] //w/o stakes
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('6') && partsInCart.includes('12') ) {
        // RipstopBow
        // partIds = ['1', '9', '5', '10', '6', '12']
        partIds = ['1', '9', '5', '10', '6'] //w/o stakes
        totalGrams = this.addIfIncludesAll(partIds, parts, totalGrams)
      }
    }

    this.convertToOunces.bind(this)
    let totalOunces = this.convertToOunces(totalGrams);

    return (
      <div>
        <h5>Min. Trail Weight:</h5>
        { this.determineDisplay(totalGrams, totalOunces) }
      </div>
    );
  }
}

export default TrailWeight;
