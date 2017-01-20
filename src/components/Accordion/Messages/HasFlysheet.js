import React from 'react';
import './messages.css';

class HasFlysheet extends React.Component {

  checkFlysheet(props) {
    let partsInCart = [];

    Object.entries(props).forEach(
      ([key, value]) => {
        partsInCart.push(key)
      }
    );

    if ( partsInCart.includes('5') ) {
      return <h4 className='normal'>[ You have a Flysheet in your configuration and will be protected from snow and rain, click Inner Tent Bodies to go to the next section. ]</h4>

    } else {
      return <h4 className='warning'>[ You Need to Add a Flysheet to your configuration otherwise you will get wet in rain or snow. ]</h4>
    }
  }

  render () {

    this.checkFlysheet.bind(this)

    return (
      <div>
        { this.checkFlysheet(this.props.partsInCart) }
      </div>
    );
  }
}

export default HasFlysheet;
