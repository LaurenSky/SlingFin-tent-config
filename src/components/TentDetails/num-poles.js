import React from 'react';
import './tent-details.css';

class NumPoles extends React.Component {

  countPoles(props) {
    let partsInCart = [];

    Object.entries(props).forEach(
      ([key, value]) => {
        console.log("in iterate!!!!" , key, value.partInfo)
        partsInCart.push(key)
        console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- NUM POLES :' , partsInCart)
      }
    );

    let style

    if ( partsInCart.includes('9') && partsInCart.includes('10') ) {
      console.log('return 3')
      return <span className='normal'> 3</span>

    } else if ( partsInCart.includes('9') && partsInCart.includes('11') ) {
      console.log('return 2')
      return <span className='normal'> 2</span>

    } else if ( partsInCart.includes('9') ) {
      console.log('return add a bow pole or use trekking-poles')
      return <span className='warning'> You NEED to ADD a bow pole or use trekking-poles</span>

    } else if ( partsInCart.includes('10') || partsInCart.includes('11') ) {
      console.log('return add cross-poles')
      return <span className='warning'> You NEED to ADD cross-poles</span>

    } else {
      console.log('return add cross poles and a (bow pole / trekking poles)')
      return <span className='warning'> You Need To ADD cross poles and a (bow pole / trekking poles)</span>
    }
  }

  render () {

    this.countPoles.bind(this)

    return (
      <div>
        <h4>
          Poles: { this.countPoles(this.props.partsInCart) }
        </h4>
      </div>
    );
  }
}

export default NumPoles;
