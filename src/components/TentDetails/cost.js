import React from 'react';
let money = require("money-math");

class Cost extends React.Component {


  render () {
    let partsInCart = [];
    let props = this.props.partsInCart

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          // console.log("in iterate!!!!" , key, value.partInfo)
          partsInCart.push(value.partInfo.price)
          // console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- COST :' , partsInCart)
        }
      );
    }

    let total = '0.00'

    for (let i = 0 ; i < partsInCart.length; i++) {
      // console.log('<<<<>>>>>>>>> IN COST ---- TOTAL-COST :' , total)
      // console.log('<<<<>>>>>>>>> IN COST ---- TOTAL-COST :' , partsInCart[i])
      total = money.add(total, partsInCart[i])
    }

    // console.log('<<<<>>>>>>>>> IN COST ---- TOTAL-COST :' , total)

    return (
      <div>
        <h5>Your Price:</h5>
        <h4> ${ total } </h4>
      </div>
    );
  }
}


export default Cost;
