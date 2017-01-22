import React, {Component} from 'react';
import './accordion.css';
import { Button } from 'react-bootstrap';


class PartButton extends Component {
  constructor (props) {
    super(props);

    this.state = {
      // partInCart: this.currentlyInPartInCart(props.part.id)
      partInCart: props.partInCart
    }
  }

  // setStateFromProps(parts, partId) {
  //   // if (parts.includes(partId)) {
  //   //   this.setState({
  //   //     partInCart: true
  //   //     })
  //   // } else {
  //   //   this.setState({
  //   //     partInCart: false
  //   //   })
  //   // }
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log("@@@@ in ON CHANGE -- state b4:", this.state.partInCart)
  //   this.setState({
  //     partInCart: !this.state.partInCart
  //   })
  //   console.log("@@@@ in ON CHANGE -- state after:", this.state.partInCart)
  // }


  partStateUpdate() {
    const val = this.state.partInCart
    const partName = this.props.part
    this.props.partStateUpdate(val, partName)
  }


  _handleClick() {
    // console.log("in handle_click--- before switch, value is ", this.state.partInCart);
    this.setState(
      {
        partInCart: !this.state.partInCart
      },
        function() {
          // console.log("in handle_click--- after switch, value is ", this.state.partInCart);
          this.partStateUpdate()
      }
    );
      // this.props.showRecommended();
  }

  currentlyInPartInCart(partId) {
    let parts = []

    if (!this.props.partInCart === false) {
      Object.entries(this.props.partInCart).forEach(
        ([key, value]) => {
          // console.log("in button iterate!!!! -- key:" , key)
          parts.push(value.partInfo.id)
          // console.log('in button iterate!!!! -- MY button PART ARRAY:' , parts)
        }
      );
    }

    // this.setStateFromProps(parts, partId).bind(this)

    if(parts.includes(partId)) {
      return true
    } else {
      return false
    }
  }

  render () {
    const part = this.props.part;
    // console.log('in PartButton ---- *****PartInCart props', this.props.partInCart)
    // console.log('in PartButton ---- partName: ', part.name)
    // console.log('partInCart state -- in button :', part.name, this.state.partInCart)



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
