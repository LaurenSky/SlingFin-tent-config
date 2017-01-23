import React from 'react';
import '../../App.css';
import Table from './Table';
import { Modal, Button } from 'react-bootstrap';
let FontAwesome = require('react-fontawesome');


class CartModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
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


  render () {
    // console.log("11111111-----In Cart state passed: ", this.props.partInCart)

    return (
      <div>
        <FontAwesome className="fa fa-shopping-cart cart-icon" name='cart' aria-hidden="true" onClick={this.open.bind(this)} />
        <Modal show={this.state.showModal} onHide={this.close.bind(this)} >
          <Modal.Header closeButton>
            <Modal.Title><strong>Cart:</strong> All parts in your Configuration</Modal.Title>
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
