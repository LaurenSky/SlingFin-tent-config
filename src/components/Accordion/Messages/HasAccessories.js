import React from 'react';
import './messages.css';
let FontAwesome = require('react-fontawesome');
require('core-js/fn/object/entries');


class HasAccessories extends React.Component {

  checkAccessories(props) {
    let partsInCart = [];

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          partsInCart.push(key)
        }
      );
    }

    if ( partsInCart.includes('12') ) {
      return (
        <div>
          <h4 className='normal'><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> You have a stakes in your configuration and will be able to pitch your tent properly.</h4>
          <p className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Congrats, you are done with your configuration now! <br/><br/> Feel free to go back to different sections and play around until you find your perfect system. When finished, click the CART icon at the top of the page to review & email your configuration to the shop to get your order started. <br/><br/> Have a great Day and can't wait to see you on the trail!</p></div>
      )

    } else {
      return (
        <div className='normal'>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> Add stakes to your configuration otherwise you will not be able to be set up your tent properly in rainy, snowy or windy conditions.</h4>
        </div>
      )
    }
  }

  render () {

    this.checkAccessories.bind(this)

    return (
      <div>
        { this.checkAccessories(this.props.partsInCart) }
      </div>
    );
  }
}

export default HasAccessories;
