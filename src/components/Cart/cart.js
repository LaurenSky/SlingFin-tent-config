import React from 'react';
import '../../App.css';
import Table from './Table';

class Cart extends React.Component {
  constructor () {
    super()
    this.state = {
      parts: {},
      // accessories: []
    }
  }

  deletePart(partName) {
    console.log('>>>>>In Cart ready to delete Part: ', partName)
    // delete this.state.parts[partName]
    // this.props.partStateUpdate(false, part, partName)

    const parts = {...this.state.parts}; //Duplicate state.
    delete parts[partName];                  //remove Item form stateCopy.
    this.setState({parts});
  }

  // addToParts() {
  //   const partKey = Object.getOwnPropertyNames(this.props.partInCart)[0]
  //   // console.log("keys", partKey)
  //
  //   const partId = this.props.partInCart[partKey]
  //   console.log("ID", partId)
  //
  //   const partProps = this.props.partInCart[partKey]
  //   console.log("details ",partProps)
  //
  //   if(this.props.partInCart !== false) {
  //     if(partProps.value === true) {
  //       // this.state.parts[partKey] = {
  //       //   value: partProps.value,
  //       //   details: partProps.partInfo
  //       // }
  //
  //       const parts = {...this.state.parts}; //Duplicate state.
  //       parts[partKey] = {
  //         value: partProps.value,
  //         details: partProps.partInfo
  //       }                  //remove Item form stateCopy.
  //       this.setState({parts});
  //
  //       console.log("parts", this.state.parts)
  //     }
  //   }
  // }

  render () {
    console.log("In Cart state passed: ", this.props.partInCart)
    const partKey = Object.getOwnPropertyNames(this.props.partInCart)[0]
      // console.log("keys", partKey)

    const partId = this.props.partInCart[partKey]
    console.log("ID", partId)

    const partProps = this.props.partInCart[partKey]
    console.log("details ",partProps)

    if(this.props.partInCart !== false) {
      if(partProps.value === true) {
        this.state.parts[partKey] = {
          value: partProps.value,
          details: partProps.partInfo
        }

        // const parts = {...this.state.parts}; //Duplicate state.
        // parts[partKey] = {
        //   value: partProps.value,
        //   details: partProps.partInfo
        // }                  //remove Item form stateCopy.
        // this.setState({parts});

        console.log("parts", this.state.parts)

      }
    }


    return (
      <div className='tent-details'>
        <Table parts={this.state.parts} deletePart={this.deletePart.bind(this)}/>
      </div>
    );
  }
}

export default Cart;
