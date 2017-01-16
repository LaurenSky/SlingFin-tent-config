import React from 'react';
let FontAwesome = require('react-fontawesome');


class EnvironmentConditions extends React.Component {
 // meshbodyID = 7
 // ripstopID = 6
 // dropinMeshID = 8
 // flysheetID = 5
 // webtruss and cross-poles: 1 & 9

  showSnowflake(partsInCart) {
    // needs webtruss, cross-poles, ripstopBody, flysheet, and (bow-pole / trekking-poles)
    // snowflake1 = '1' && '9' && '6' && '5' && '10'
    // snowflake2 = '1' && '9' && '6' && '5' && '11'

    if ( (Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('6') && Object.keys(partsInCart).includes('5') && Object.keys(partsInCart).includes('10')) || (Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('6') && Object.keys(partsInCart).includes('5') && Object.keys(partsInCart).includes('11')) ){
      // console.log(true)
      // console.log("^^^^^^^^ I'm showing a snowflake")
      return <FontAwesome className="fa fa-snowflake-o increase-icon snowflake" name='snowflake' aria-hidden="true" />
    } else {
      console.log(false)
      return false
    }
  }

  showRaindrop(partsInCart) {
    // needs webtruss, cross-poles, flysheet, and (bow-pole / trekking-poles) && ( tub footprint / flatfootprint / meshBody / ripstopBody)
    // raindrop1 = '1' && '9' && '5' && '10' && '3'
    // raindrop2 = '1' && '9' && '5' && '11' && '3'

    // raindrop3 = '1' && '9' && '5' && '10' && '4'
    // raindrop4 = '1' && '9' && '5' && '11' && '4'

    // raindrop5 = '1' && '9' && '5' && '10' && '7'
    // raindrop6 = '1' && '9' && '5' && '11' && '7'

    // raindrop7 = '1' && '9' && '5' && '10' && '6'
    // raindrop8 = '1' && '9' && '5' && '11' && '6'
    if ( ( Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('5') && Object.keys(partsInCart).includes('10') && Object.keys(partsInCart).includes('3') ) || ( Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('5') && Object.keys(partsInCart).includes('11') && Object.keys(partsInCart).includes('3') ) || ( Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('5') && Object.keys(partsInCart).includes('10') && Object.keys(partsInCart).includes('4') ) || ( Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('5') && Object.keys(partsInCart).includes('11') && Object.keys(partsInCart).includes('4') ) || ( Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('5') && Object.keys(partsInCart).includes('10') && Object.keys(partsInCart).includes('7') ) || ( Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('5') && Object.keys(partsInCart).includes('11') && Object.keys(partsInCart).includes('7') ) || ( Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('5') && Object.keys(partsInCart).includes('10') && Object.keys(partsInCart).includes('6') ) || ( Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('5') && Object.keys(partsInCart).includes('11') && Object.keys(partsInCart).includes('6') ) ){
      // console.log(true)
      // console.log("^^^^^^^^ I'm showing a raindrop")
      return <FontAwesome className="fa fa-tint increase-icon raindrop" name='raindrop' aria-hidden="true" />
    } else {
      console.log(false)
      return false
    }
  }

  showBug(partsInCart) {
    // needs webtruss, cross-poles, (ripstopBody / meshBody / DropIn mesh Body), (bow-pole / trekking-poles)
    // bug-bow1 = '1' && '9' && '6' && '10'
    // bug-bow2 = '1' && '9' && '7' && '10'
    // bug-bow3 = '1' && '9' && '8' && '10'

    // bug-trek1 = '1' && '9' && '6' && '11'
    // bug-trek2 = '1' && '9' && '7' && '11'
    // bug-trek3 = '1' && '9' && '8' && '11'
    if ( (Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('6') && Object.keys(partsInCart).includes('10')) || (Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('7') && Object.keys(partsInCart).includes('10')) || (Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('8') && Object.keys(partsInCart).includes('3') && Object.keys(partsInCart).includes('10')) || (Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('6') && Object.keys(partsInCart).includes('11')) || (Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('7') && Object.keys(partsInCart).includes('11')) || (Object.keys(partsInCart).includes('1') && Object.keys(partsInCart).includes('9') && Object.keys(partsInCart).includes('8') && Object.keys(partsInCart).includes('3') && Object.keys(partsInCart).includes('11'))) {
      // console.log(true)
      // console.log("^^^^^^^^ I'm showing a bug")
      return <FontAwesome className="fa fa-bug increase-icon bugs" name='bugs' aria-hidden="true" />
    } else {
      console.log(false)
      return false
    }
  }

  render () {
    // console.log("^^^^^^^keys in conditions: ----" , Object.keys(partsInCart))


    return (
      <div className='conditions-protection'>
        <h5>Protects you from:</h5>
        {this.showSnowflake(this.props.partInCart)}
        {this.showRaindrop(this.props.partInCart)}
        {this.showBug(this.props.partInCart)}
      </div>
    );
  }
}

export default EnvironmentConditions;
