import React from 'react';
import '../../App.css';
import Table from './Table';
import DeleteButton from './DeleteButton'

class Cart extends React.Component {
  constructor () {
    super()
    this.state = {
      parts: {},
      accessories: []
    }
  }

  render () {
    console.log("In Cart state passed: ", this.props.partInCart)

    const partKey = Object.getOwnPropertyNames(this.props.partInCart)[0]
    console.log("keys", partKey)

    const partProps = this.props.partInCart[partKey]
    console.log("details ",partProps)

    if(this.props.partInCart !== false) {
      if(partProps.value === true) {
        this.state.parts[partKey] = {
          value: partProps.value,
          details: partProps.partInfo
        }
        console.log("parts", this.state.parts)

      }
    }

    // else if (partProps.value === false){


    // if(this.props.partInCart !== false) {
    //   if(partProps.value === true) {
    //     this.state.parts.push(partProps.partInfo);
    //     console.log("parts", this.state.parts)
    //   } else if (partProps.value === false){
    //
    //   }
    // }



    return (
      <div className='tent-details'>
      </div>
    );
  }
}

export default Cart;
