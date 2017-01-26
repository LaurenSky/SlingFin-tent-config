import React from 'react';
import './messages.css';
require('core-js/fn/object/entries');
let FontAwesome = require('react-fontawesome');


class HasWebTruss extends React.Component {

  checkForWebTruss(props) {
    let partsInCart = [];

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          partsInCart.push(key)
        }
      );
    }


    if ( partsInCart.includes('1') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> You have a WebTruss in your configuration.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Click Poles to go to the next section. </h4>
        </div>
      )

    } else {
      return (
        <div className='normal'>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> You Need to Add a WebTruss to your configuration.</h4>
        </div>
      )
    }
  }

  render () {

    this.checkForWebTruss.bind(this)

    return (
      <div>
        { this.checkForWebTruss(this.props.partsInCart) }
      </div>
    );
  }
}

export default HasWebTruss;
