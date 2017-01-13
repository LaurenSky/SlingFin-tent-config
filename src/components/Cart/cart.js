import React from 'react';
import '../../App.css';
import Table from './Table';

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


    return (
      <div className='tent-details'>
        <Table parts={this.state.parts}/>
      </div>
    );
  }
}

export default Cart;
