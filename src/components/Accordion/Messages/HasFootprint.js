import React from 'react';
import './messages.css';
let FontAwesome = require('react-fontawesome');


class HasFootprint extends React.Component {

  checkForFootprint(props) {
    let partsInCart = [];

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          partsInCart.push(key)
        }
      );
    }


    if ( partsInCart.includes('3') && partsInCart.includes('4') && partsInCart.includes('8')) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added all of these to your configuration.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Click on Accessories to go to the next step.</h4>
        </div>
      )

    } else if ( partsInCart.includes('3') && partsInCart.includes('4') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added a tub footprint and a flat footprint to your configuration.</h4>
          <h4 className='add-something'><FontAwesome className="fa fa-plus" name='plus' aria-hidden="true" /> Add a DropIn Mesh Body to have a lightweight tent with bug protection too.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Or click on Accessories to go to the next step.</h4>
        </div>
      )
    } else if ( partsInCart.includes('3') && partsInCart.includes('8')) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added a tub footprint and a DropIn Mesh Body to your configuration.</h4>
          <h4 className='add-something'><FontAwesome className="fa fa-plus" name='plus' aria-hidden="true" /> Add a Flat Footprint.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Or click on Accessories to go to the next step.</h4>
        </div>
      )

    } else if ( partsInCart.includes('3') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added a tub footprint to your configuration.</h4>
          <h4 className='add-something'><FontAwesome className="fa fa-plus" name='plus' aria-hidden="true" /> Add DropIn Mesh Body to add bug protection.</h4>
          <h4 className='add-something'><FontAwesome className="fa fa-plus" name='plus' aria-hidden="true" /> Add a Flat Footprint.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Or click on Accessories to go to the next step.</h4>
        </div>
      )

    } else if ( partsInCart.includes('4') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added extra protection for your tent floor.</h4>
          <h4 className='add-something'><FontAwesome className="fa fa-plus" name='plus' aria-hidden="true" /> Add a Tub Footprint.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Or click on Accessories to go to the next step.</h4>
        </div>
      )

    } else {
      return (
        <div className='normal'>
          <h4 className='add-something'><FontAwesome className="fa fa-plus" name='plus' aria-hidden="true" /> These are optional to your configuration add one if you want to be able to create a stormpack or want extra protection for your tent floor.</h4>
        </div>
      )
    }
  }

  render () {

    this.checkForFootprint.bind(this)

    return (
      <div>
        { this.checkForFootprint(this.props.partsInCart) }
      </div>
    );
  }
}

export default HasFootprint;
