import React, { Component } from 'react';
// var Mailto = require('react-mailto');
import Mailto from './Mailto'

class SendEmail extends React.Component {

  render() {
    let headerItems = {
      body: this.props.body
    }

    let slingFinAddress = 'sky@slingfin.com'

    return (
      <Mailto email={slingFinAddress} headers={headerItems}>
        Email Order to Shop!
      </Mailto>
    );
  }
};

export default SendEmail;
