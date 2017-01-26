import React from 'react';
import '../../App.css';
import Table from './Table';

class Cart extends React.Component {

  render () {

    return (
      <div className='tent-details'>
        <Table parts={this.props.partInCart} deletePart={this.props.deletePart} />
      </div>
    );
  }
}

export default Cart;
