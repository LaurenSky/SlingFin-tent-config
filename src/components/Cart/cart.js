import React from 'react';
import '../../App.css';
import Table from './Table';
import SendEmail from './Email'

class Cart extends React.Component {

  render () {
    // console.log("11111111-----In Cart state passed: ", this.props.partInCart)



    return (
      <div className='tent-details'>
        <Table parts={this.props.partInCart} deletePart={this.props.deletePart} />
        <SendEmail className='send-email button' partsInCart={this.props.partsInCart} table={Table}/>
      </div>
    );
  }
}

export default Cart;
