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
      return <div><h4 className='normal'>[ You have a Flysheet in your configuration and will be protected from snow and rain.</h4><h4 className='go-next-step'>Click Inner Tent Bodies to go to the next section.</h4></div>

    } else {
      return <h4 className='warning'>You Need to Add a Flysheet to your configuration otherwise you will get wet in rain or snow.</h4>
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
