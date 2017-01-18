import React, { Component, PropTypes } from 'react';
import '../../App.css';


class Mailto extends React.Component {

  // createMailLink(email, headers) {
  //   // let link = 'mailto:' + email + '?subject=Tent Configurator Order&body=';
  //   let link = 'mailto:' + email + '?subject=Tent Configurator Order&body=';
  //   link += headers.body
  //   return link;
  //
  // }

  createMailLink(email, headers) {
    // let link = 'mailto:' + email + '?subject=Tent Configurator Order&body=';
    let link = 'mailto:' + email + '?subject=Tent Configurator Order&body=';
    link += 'From: ' + '%0D%0A'
    link += '(Your Name)' + '%0D%0A'
    link += '(Your Phone #)' + '%0D%0A' + '%0D%0A'

    link += 'To: ' + '%0D%0A'
    link += 'SlingFin' + '%0D%0A'
    link += '1355 Fourth Street, Suite C' + '%0D%0A'
    link += 'Berkeley CA 94710' + '%0D%0A'
    link += 'SlingFin.com' + '%0D%0A' + '%0D%0A' + '%0D%0A'

    link += 'SlingFin Order Form:' + '%0D%0A'
    link += '(Send Order Request of the following Items from your cart) ' + '%0D%0A' + '%0D%0A'


    for (let i = 0 ; i < headers.body.length; i++) {
      link += 'Item ' + (i+1) + ': ' + headers.body[i] + '   ( $' + headers.price[i] + ' )' + '%0D%0A'
    }

    link += '%0D%0A' + '%0D%0A'
    link += 'Total # of Items: ' + headers.body.length + '%0D%0A'
    link += 'Order Total: $' + headers.total + '%0D%0A' + '%0D%0A'

    link += 'Thank You! We will contact you as soon as possible in to complete this order. Have a great day! -- The SlingFin Crew'
    return link;
  }

  renderLink () {
    return (
      <a className='send-email' target ='blank' href={this.createMailLink(this.props.email, this.props.headers)}>
        {this.props.children}
      </a>
    );
  }


  handleClick (event) {
    event.preventDefault();
    window.location.href = this.createMailLink(this.props.email, this.props.headers);
  }


  render () {
    this.createMailLink.bind(this)

    return(
      this.renderLink()
    );
  }
}

Mailto.propTypes = {
  children: PropTypes.node.isRequired,
  email: PropTypes.string.isRequired,
  headers: PropTypes.object,
};


export default Mailto;
