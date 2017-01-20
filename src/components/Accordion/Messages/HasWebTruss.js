import React from 'react';
import './messages.css';

class HasWebTruss extends React.Component {

  checkForWebTruss(props) {
    let partsInCart = [];

    Object.entries(props).forEach(
      ([key, value]) => {
        partsInCart.push(key)
      }
    );

    if ( partsInCart.includes('1') ) {
      return <h4 className='normal'>[ You have a WebTruss in your configuration, click Poles to go to the next section. ]</h4>

    } else {
      return <h4 className='warning'>[ You Need to Add a WebTruss to your configuration. ]</h4>
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
