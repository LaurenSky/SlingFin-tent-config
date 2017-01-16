import React from 'react';
let money = require("money-math");

class Cost extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     // active: false
  //   };
  // }

  calculateTotal() {

  }

  render () {
    let partsInCart = [];

    Object.entries(this.props.partsInCart).forEach(
      ([key, value]) => {
        console.log("in iterate!!!!" , key, value.partInfo)
        partsInCart.push(value.partInfo.price)
        console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- COST :' , partsInCart)
      }
    );

    let total = '0.00'

    for (let i = 0 ; i < partsInCart.length; i++) {
      console.log('<<<<>>>>>>>>> IN COST ---- TOTAL-COST :' , total)
      console.log('<<<<>>>>>>>>> IN COST ---- TOTAL-COST :' , partsInCart[i])
      total = money.add(total, partsInCart[i])
    }

    console.log('<<<<>>>>>>>>> IN COST ---- TOTAL-COST :' , total)

    return (
      <div>
        <h4>PRICE: ${ total }</h4>
      </div>
    );
  }
}


export default Cost;
