import React, {Component} from 'react';
import './accordion.css';
import { Button } from 'react-bootstrap';


class PartButton extends Component {
  constructor () {
    super();

    this.state = {
      partInCart: false
    }
  }

  _handleClick() {
    this.setState({
      partInCart: !this.state.partInCart
    })
    console.log("switch")
  }

  render () {
    const part = this.props.part;
    console.log('render:', part.name)

    let buttonText = 'Add'
    if (this.state.partInCart) {
      buttonText = 'Remove ';
    }

    let bsStyle='success'

    if (this.state.partInCart) {
      bsStyle="danger"
    }

    const partButton = <Button onClick={this._handleClick.bind(this)} bsStyle={bsStyle}>{buttonText} {part.name}</Button>

    return (
      partButton
    );
  }
}

export default PartButton;
