import React, { Component, PropTypes } from 'react';
import '../../App.css';


class Mailto extends React.Component {

  createMailLink(email, headers) {
    // let link = 'mailto:' + email + '?subject=Tent Configurator Order&body=';
    let link = 'mailto:' + email + '?subject=Tent Configurator Order&body=';
    link += headers.body
    return link;

  }

  renderLink () {
    return (
      <a className='send-email' href={this.createMailLink(this.props.email, this.props.headers)}>
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
