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

  partStateUpdate() {
    const val = this.state.partInCart
    const partName = this.props.part.name
    this.props.partStateUpdate(val, partName)
  }

  _handleClick() {
    console.log("before switch, value is ", this.state.partInCart);
    this.setState({
      partInCart: !this.state.partInCart
    },
    function() {
      console.log("switch, value is ", this.state.partInCart);
      this.partStateUpdate()
    }
  );

  }

  render () {
    const part = this.props.part;
    console.log('render:', part.name)
    console.log('partInCart in button:', part.name, this.state.partInCart)


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
