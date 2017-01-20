
import React from 'react';
import './messages.css';


class HasInnerTentBodies extends React.Component {
  checkForInnerTentBodies(props) {
    let partsInCart = [];

    Object.entries(props).forEach(
      ([key, value]) => {
        partsInCart.push(key)
      }
    );

    if ( partsInCart.includes('6') && partsInCart.includes('7') && partsInCart.includes('8') && partsInCart.includes('3')) {
      return <div><h4 className='normal'>[ Great, you added all of these to your configuration. ]</h4><h4 className='go-next-step'>Click on Footprints to go to the next step.</h4></div>

    } else if ( partsInCart.includes('6') && partsInCart.includes('7') && partsInCart.includes('8')) {
      return <div><h4 className='normal'>[ You added all of these to your configuration. ]</h4><h4 className='warning'>Add a tub footprint for the DropIn Mesh Body to be functional.</h4></div>

    } else if ( partsInCart.includes('6') && partsInCart.includes('8') && partsInCart.includes('3') ) {
      return <div><h4 className='normal'>[ Great, you added a RipStop body, Drop-In Mesh Body and Tub Footprint to your configuration. ]</h4><h4 className='go-next-step'>Click on Footprints to go to the next step. </h4></div>

    } else if ( partsInCart.includes('7') && partsInCart.includes('8') && partsInCart.includes('3') ) {
      return <div><h4 className='normal'>[ Great, you added a Mesh body, Drop-In Mesh Body and Tub Footprint to your configuration. ]</h4><h4 className='go-next-step'>Click on Footprints to go to the next step.</h4></div>

    } else if ( partsInCart.includes('6') && partsInCart.includes('7') ) {
      return <div><h4 className='normal'>[ Great, you added a RipStop body and a Mesh Body to your configuration. ] </h4><h4 className='go-next-step'> Click on Footprints to go to the next step.</h4></div>

    } else if ( partsInCart.includes('6') && partsInCart.includes('8') ) {
      return <div><h4 className='normal'>[ Great, you added a RipStop body and a Drop-In Mesh Body to your configuration. ] </h4><h4 className='warning'>Add a tub footprint for the DropIn Mesh Body to be functional.</h4></div>

    } else if ( partsInCart.includes('7') && partsInCart.includes('8') ) {
      return <div><h4 className='normal'>[ Great, you added a Mesh body, Drop-In Mesh Body to your configuration. ] </h4><h4 className='warning'>Add a tub footprint for the DropIn Mesh Body to be functional.</h4></div>

    } else if ( partsInCart.includes('6') ) {
      return <div><h4 className='normal'>[ Great, you added a RipStop Body to your configuration ]</h4><h4 className='warning'>Add a Mesh Body to have a 3-season tent too</h4><h4 className='go-next-step'>or click on Footprints to go to the next step.</h4></div>

    } else if ( partsInCart.includes('7') ) {
      return <div><h4 className='normal'>[ Great, you added a Mesh Body to your configuration ]</h4><h4 className='warning'>Add a RipStop Body to have a lightweight and strong 4-season tent too</h4><h4 className='go-next-step'>or click on Footprints to go to the next step.</h4></div>

    } else if ( partsInCart.includes('8') && partsInCart.includes('3') ) {
      return <div><h4 className='normal'>[ Great, you added a Drop-In Mesh Body and Tub Footprint to your configuration. ] </h4><h4 className='go-next-step'>Click on Footprints to go to the next step. </h4></div>

    } else if ( partsInCart.includes('8') ) {
      return <div><h4 className='normal'>[ Great, you added a Drop-In Mesh Body to your configuration. ]</h4><h4 className='warning'>Add a tub footprint for the DropIn Mesh Body to be functional. </h4></div>

    } else {
      return <h4 className='normal'>[ Pick one or more Inner Tent Bodies, depending on which conditions you plan on camping in. ]</h4>
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
