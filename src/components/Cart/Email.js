import React, { Component } from 'react';
// var Mailto = require('react-mailto');
import Mailto from './Mailto'

class SendEmail extends React.Component {

  // link() {
  //   let name = "you";
  //   let domain = "yourdomain.com";
  //   let linker = "mailto:" + 'sky' + '@' + 'slingfin.com' + "?subject=Tent_Configurator_Order&body=";
  //   linker += this.getBody.bind(this);
  //   return linker
  // };
  //
  // getBody() {
  //     return 'HelloWorld';
  // };

  render() {
    // this.link.bind(this)

    let headerItems = {
      subject: 'Tent Configurator Order',
      body: this.props.partsInCart
    }

    let slingFinAddress = 'sky@slingfin.com'

    return (
      <Mailto email={slingFinAddress} obfuscate={true} headers={headerItems}>
        Email Order to Shop!
      </Mailto>
    );
  }
};

export default SendEmail;
