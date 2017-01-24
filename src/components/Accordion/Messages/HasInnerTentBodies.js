
import React from 'react';
import './messages.css';
let FontAwesome = require('react-fontawesome');
require('core-js/fn/object/entries');


class HasInnerTentBodies extends React.Component {
  checkForInnerTentBodies(props) {
    let partsInCart = [];

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          partsInCart.push(key)
        }
      );
    }


    if ( partsInCart.includes('6') && partsInCart.includes('7') && partsInCart.includes('8') && partsInCart.includes('3')) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added all of these to your configuration.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Click on Footprints to go to the next step.</h4>
        </div>
      )

    } else if ( partsInCart.includes('6') && partsInCart.includes('7') && partsInCart.includes('8')) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> You added a RipStop Body, Mesh Body and DropIn Mesh Body.</h4>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> You NEED to ADD a tub footprint for the DropIn Mesh Body to be functional.</h4>
        </div>
      )

    } else if ( partsInCart.includes('6') && partsInCart.includes('8') && partsInCart.includes('3') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added a RipStop body, Drop-In Mesh Body and Tub Footprint to your configuration.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Click on Footprints to go to the next step. </h4>
        </div>
      )

    } else if ( partsInCart.includes('7') && partsInCart.includes('8') && partsInCart.includes('3') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added a Mesh body, Drop-In Mesh Body and Tub Footprint to your configuration.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Click on Footprints to go to the next step.</h4>
        </div>
      )

    } else if ( partsInCart.includes('6') && partsInCart.includes('7') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added a RipStop body and a Mesh Body to your configuration. </h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Click on Footprints to go to the next step.</h4>
        </div>
      )

    } else if ( partsInCart.includes('6') && partsInCart.includes('8') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='cart' aria-hidden="true" /> Great, you added a RipStop body and a Drop-In Mesh Body to your configuration. </h4>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='cart' aria-hidden="true" /> Add a tub footprint for the DropIn Mesh Body to be functional.</h4>
        </div>
      )

    } else if ( partsInCart.includes('7') && partsInCart.includes('8') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added a Mesh body, Drop-In Mesh Body to your configuration. </h4>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> Add a tub footprint for the DropIn Mesh Body to be functional.</h4>
        </div>
      )

    } else if ( partsInCart.includes('6') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added a RipStop Body to your configuration.</h4>
          <h4 className='add-something'><FontAwesome className="fa fa-plus" name='plus' aria-hidden="true" /> Add a Mesh Body to have a 3-season tent too.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> or click on Footprints to go to the next step.</h4>
        </div>
      )

    } else if ( partsInCart.includes('7') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added a Mesh Body to your configuration.</h4>
          <h4 className='add-something'><FontAwesome className="fa fa-plus" name='plus' aria-hidden="true" /> Add a RipStop Body to have a lightweight and strong 4-season tent too</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> or click on Footprints to go to the next step.</h4>
        </div>
      )

    } else if ( partsInCart.includes('8') && partsInCart.includes('3') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added a Drop-In Mesh Body and Tub Footprint to your configuration. </h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Click on Footprints to go to the next step. </h4>
        </div>

      )
    } else if ( partsInCart.includes('8') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> Great, you added a Drop-In Mesh Body to your configuration.</h4>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> Add a tub footprint for the DropIn Mesh Body to be functional. </h4>
        </div>

      )
    } else if ( partsInCart.includes('3') ) {
      return (
        <div className='normal'>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> You have a Tub Footprint in your configuration.</h4>
          <h4 className='add-something'><FontAwesome className="fa fa-plus" name='plus' aria-hidden="true" /> Add a DropIn Mesh Body to have a 3-season tent too. </h4>
          <h4 className='add-something'><FontAwesome className="fa fa-plus" name='plus' aria-hidden="true" /> Add a RipStop Body to have a 4-season tent too. </h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Click on Footprints to go to the next step. </h4>
        </div>

      )
    } else {
      return (
        <div className='normal'>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> Pick one or more Inner Tent Bodies, depending on which conditions you plan on camping in.</h4>
        </div>
      )
    }
  }



  render () {

    this.checkForInnerTentBodies.bind(this)

    return (
      <div>
        { this.checkForInnerTentBodies(this.props.partsInCart) }
      </div>
    );
  }
}

export default HasInnerTentBodies;
