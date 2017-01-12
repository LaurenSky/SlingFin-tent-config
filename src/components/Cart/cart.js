import React from 'react';
import '../../App.css';
import Table from './Table';
import DeleteButton from './DeleteButton'

class Cart extends React.Component {
  constructor () {
    super()
    this.state = {
      parts: [],
      accessories: []
    }
  }

  render () {
    console.log("In Cart state passed: ", this.props.partInCart)

    const partKey = Object.keys(this.props.partInCart)
    const partProps = this.props.partInCart[partKey]
    console.log("keys", partKey)
    console.log("details ",partProps)

    if(this.props.partInCart !== false) {
      if(partProps.value === true) {
        this.state.parts.push(partProps.partInfo);
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
