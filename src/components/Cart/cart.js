import React from 'react';
import '../../App.css';
import Table from './Table';

class Cart extends React.Component {

  render () {
    console.log("11111111-----In Cart state passed: ", this.props.partInCart)



    return (
      <div className='tent-details'>
        <Table parts={this.props.partInCart} deletePart={this.props.deletePart}/>
      </div>
    );
  }
}

export default Cart;
