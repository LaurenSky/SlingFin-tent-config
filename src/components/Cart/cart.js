import React from 'react';
import '../../App.css';

class Cart extends React.Component {


  render () {
    console.log("In Cart state passed: ", this.props.partInCart)
    // const partsInCart = this.props.partInCart

    return (
      <div className='tent-details'>
        <p> I'm in the cart</p>
        <ul>
          <li>{Object.keys(this.props.partInCart)}</li>
        </ul>
      </div>
    );
  }
}

export default Cart;
