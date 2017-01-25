import React from 'react';
import '../../App.css';
import Table from './Table';
import { Modal, Button } from 'react-bootstrap';
let FontAwesome = require('react-fontawesome');


class CartModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      hover: false
    };
  }

  close() {
    this.setState({
      showModal: false
    });
  };

  open() {
    this.setState({
      showModal: true
    });
  };

  cartItemNum() {
    let numParts = 0
    let partsInCart = this.props.partInCart
    console.log("In Cart state passed: ", this.props.partInCart)
    if (partsInCart !== false) {
      numParts = Object.keys(partsInCart).length
      console.log("11111111-----In Cart state passed: ", numParts)
      if(numParts > 1) {
        return (
          <p className='cart-item-count'>{numParts} Items</p>
        )
      } else if (numParts === 1) { 
        return (
          <p className='cart-item-count'>{numParts} Item</p>
        )
      }
    }
  }

  render () {
    // console.log("11111111-----In Cart state passed: ", this.props.partInCart)
    this.cartItemNum.bind(this);

    return (
      <div>
        <section className="rolling-cart">
          <FontAwesome className="fa fa-shopping-cart cart-icon" name='cart' aria-hidden="true"  onClick={this.open.bind(this)} />
          {this.cartItemNum()}
        </section>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)} >
          <Modal.Header closeButton>
            <Modal.Title><strong>Parts in your Configuration</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Table parts={this.props.partInCart} deletePart={this.props.deletePart} />

        </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CartModal;
