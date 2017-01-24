import React from 'react';
import './messages.css';
let FontAwesome = require('react-fontawesome');


class NumPoles extends React.Component {

  countPoles(props) {
    let partsInCart = [];

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          // console.log("in iterate!!!!" , key, value.partInfo)
          partsInCart.push(key)
          // console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- NUM POLES :' , partsInCart)
        }
      );
    }


    if ( partsInCart.includes('9') && partsInCart.includes('10') ) {
      // console.log('return 3')
      return (
        <div className='normal'>
          <h5># of Poles Selected: 3 </h5>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> You have all of the poles you need.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Click on Flysheets to go to the next section.</h4>
        </div>
      )
    } else if ( partsInCart.includes('9') && partsInCart.includes('11') ) {
      // console.log('return 2')
      return (
        <div className='normal'>
          <h5># of Poles Selected: 2 </h5>
          <h4><FontAwesome className="fa fa-check" name='checkmark' aria-hidden="true" /> You have all of the poles you need.</h4>
          <h4 className='go-next-step'><FontAwesome className="fa fa-arrow-right" name='arrow' aria-hidden="true" /> Click on Flysheets to go to the next section.</h4>
        </div>
      )

    } else if ( partsInCart.includes('9') ) {
      // console.log('return add a bow pole or use trekking-poles')
      return (
        <div className='normal'>
          <h5># of Poles Selected: 2 </h5>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> You NEED to ADD a (bow pole or use trekking-poles).</h4>
        </div>
      )

    } else if ( partsInCart.includes('10') ) {
      // console.log('return add cross-poles')
      return (
        <div className='normal'>
          <h5># of Poles Selected: 1 </h5>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> You NEED to ADD cross-poles.</h4>
        </div>
      )

    } else if ( partsInCart.includes('11') ) {
      // console.log('return add cross-poles')
      return (
        <div className='normal'>
          <h5># of Poles Selected: 0 </h5>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> You NEED to ADD cross-poles.</h4>
        </div>
      )

    } else {
      // console.log('return add cross poles and a (bow pole / trekking poles)')
      return (
        <div className='normal'>
          <h5># of Poles Selected: 0 </h5>
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> You Need To ADD cross poles and a (bow pole / trekking poles).</h4>
        </div>
      )
    }
  }

  render () {

    this.countPoles.bind(this)

    return (
      <div>
        { this.countPoles(this.props.partsInCart) }
      </div>
    );
  }
}

export default NumPoles;
