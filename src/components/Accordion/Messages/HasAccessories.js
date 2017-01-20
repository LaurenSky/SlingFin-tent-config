import React from 'react';
import './messages.css';

class HasAccessories extends React.Component {

  checkAccessories(props) {
    let partsInCart = [];

    Object.entries(props).forEach(
      ([key, value]) => {
        partsInCart.push(key)
      }
    );

    if ( partsInCart.includes('12') ) {
      return <div><h4 className='normal'>[ You have a stakes in your configuration and will be able to pitch your tent properly.]</h4><p>Congrats, you are done with your configuration now! Feel free to go back to different sections and play around until you find your perfect system. When you're done, click the green button in the configuration part list area to email them to the shop and get your order started. Have a great Day and can't wait to see you on the trail!</p></div>

    } else {
      return <h4 className='warning'>[ Add stakes to your configuration otherwise you will not be able to be set up your tent properly in rainy, snowy or windy conditions. ]</h4>
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
