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

  webTrussUpdate() {
    const val = this.state.partInCart
    this.props.webTrussUpdate(val)
  }

  _handleClick() {
    console.log("before switch, value is " + this.state.partInCart);
    this.setState({
      partInCart: !this.state.partInCart
    },
    function() {
      console.log("switch, value is " + this.state.partInCart);
      this.webTrussUpdate()
    }
  );

  }

  render () {
    console.log('partInCart in button:', this.state.partInCart)

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
