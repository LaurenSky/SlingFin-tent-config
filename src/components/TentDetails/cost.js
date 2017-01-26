import React from 'react';
let money = require("money-math");

class Cost extends React.Component {


  render () {
    let partsInCart = [];
    let props = this.props.partsInCart

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          partsInCart.push(value.partInfo.price)
        }
      );
    }

    let total = '0.00'

    for (let i = 0 ; i < partsInCart.length; i++) {
      total = money.add(total, partsInCart[i])
    }

    return (
      <div>
        <h5>Your Price:</h5>
        <h4> ${ total } </h4>
      </div>
    );
  }
}


export default Cost;
