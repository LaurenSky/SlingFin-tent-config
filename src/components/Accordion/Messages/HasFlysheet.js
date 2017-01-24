import React from 'react';
import './messages.css';
let FontAwesome = require('react-fontawesome');
require('core-js/fn/object/entries');



class HasFlysheet extends React.Component {

  checkFlysheet(props) {
    let partsInCart = [];

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          partsInCart.push(key)
        }
      );
    }


    if ( partsInCart.includes('5') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> You have a Flysheet in your configuration and will be protected from snow and rain.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Click Inner Tent Bodies to go to the next section.</h4>
        </div>
      )

    } else {
      return (
        <div className='normal'>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> You Need to Add a Flysheet to your configuration otherwise you will get wet in rain or snow.</h4>
        </div>
      )
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
