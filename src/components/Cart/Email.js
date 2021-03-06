import React, { Component } from 'react';
import Mailto from './Mailto'

class SendEmail extends Component {

  render() {
    let headerItems = {
      body: this.props.body,
      price: this.props.prices,
      total: this.props.total
    }



    let slingFinAddress = 'sky@slingfin.com'

    return (
      <Mailto email={slingFinAddress} headers={headerItems}>
        Email Order Request to Shop!
      </Mailto>
    );
  }
};

export default SendEmail;
