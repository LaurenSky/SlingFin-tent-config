import React from 'react';
import './messages.css';

class HasFootprint extends React.Component {

  checkForFootprint(props) {
    let partsInCart = [];

    Object.entries(props).forEach(
      ([key, value]) => {
        partsInCart.push(key)
      }
    );

    if ( partsInCart.includes('3') && partsInCart.includes('4') && partsInCart.includes('8')) {
      return <div><h4 className='normal'>Great, you added all of these to your configuration.</h4><h4 className='go-next-step'>Click on Accessories to go to the next step.</h4></div>

    } else if ( partsInCart.includes('3') && partsInCart.includes('4') ) {
      return <div><h4 className='normal'>Great, you added a tub footprint and a flat footprint to your configuration.</h4><h4 className='go-next-step'>Add a DropIn Mesh Body to have a lightweight tent with bug protection too. <br/><br/> Or click on Accessories to go to the next step.</h4></div>

    } else if ( partsInCart.includes('3') && partsInCart.includes('8')) {
      return <div><h4 className='normal'>Great, you added a tub footprint and a DropIn Mesh Body to your configuration.</h4><h4 className='go-next-step'>Add a Flat Footprint. <br/><br/> Or click on Accessories to go to the next step.</h4></div>

    } else if ( partsInCart.includes('3') ) {
      return <div><h4 className='normal'>Great, you added a tub footprint to your configuration.</h4><h4 className='go-next-step'>Add a Flat Footprint. <br/> Add DropIn Mesh Body to add bug protection. <br /><br/>Or click on Accessories to go to the next step.</h4></div>

    } else if ( partsInCart.includes('4') ) {
      return <div><h4 className='normal'>Great, you added extra protection for your tent floor.</h4><h4 className='go-next-step'>Add a Tub Footprint. <br/><br/> Or click on Accessories to go to the next step.</h4></div>

    } else {
      return <h4 className='normal'>These are optional to your configuration add one if you want to be able to create a stormpack or want extra protection for your tent floor.</h4>
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
