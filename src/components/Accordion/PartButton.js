import React, {Component} from 'react';
import './accordion.css';
import { Button } from 'react-bootstrap';


class PartButton extends Component {
  constructor (props) {
    super(props);

    this.state = {
      partInCart: props.partInCart
    }
  }

  partStateUpdate() {
    const val = this.state.partInCart
    const partName = this.props.part
    this.props.partStateUpdate(val, partName)
  }


  _handleClick() {
    this.setState(
      {
        partInCart: !this.state.partInCart
      },
        function() {
          this.partStateUpdate()
      }
    );
    // if (this.props.showRecommended !== null) {
    //   this.props.showRecommended();
    // }
  }

  currentlyInPartInCart(partId) {
    let parts = []

    if (!this.props.partInCart === false) {
      Object.entries(this.props.partInCart).forEach(
        ([key, value]) => {
          parts.push(value.partInfo.id)
        }
      );
    }

    if(parts.includes(partId)) {
      return true
    } else {
      return false
    }
  }

  render () {
    const part = this.props.part;

    let buttonText = 'Add'
    let bsStyle='success'
    this.currentlyInPartInCart.bind(this)

    if (this.currentlyInPartInCart(part.id)) {
      buttonText = 'Remove';
      bsStyle = "danger";
    }


    const partButton = <Button onClick={this._handleClick.bind(this)} bsStyle={bsStyle}>{buttonText} {part.name}</Button>

    return (
      partButton
    );
  }
}

export default PartButton;
