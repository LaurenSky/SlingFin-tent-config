import React from 'react';
let FontAwesome = require('react-fontawesome');

class EnvironmentConditions extends React.Component {
 // meshbodyID = 7
 // ripstopID = 6
 // dropinMeshID = 8
 // flysheetID = 5
 // webtruss and cross-poles: 1 & 9

  showSnowflake(selectedParts) {
    // needs webtruss, cross-poles, ripstopBody, flysheet, and (bow-pole / trekking-poles)
    // snowflake1 = '1' && '9' && '6' && '5' && '10'
    // snowflake2 = '1' && '9' && '6' && '5' && '11'

    if ( (selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('6') && selectedParts.includes('5') && selectedParts.includes('10')) || (selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('6') && selectedParts.includes('5') && selectedParts.includes('11')) ){

      //I'm showing a snowflake
      return <FontAwesome className="fa fa-snowflake-o increase-icon snowflake" name='snowflake' aria-hidden="true" />
    } else {
      return <FontAwesome className="fa fa-snowflake-o increase-icon snowflake decrease-opacity" name='snowflake' aria-hidden="true" />
    }
  }

  showRaindrop(selectedParts) {
    // needs webtruss, cross-poles, flysheet, and (bow-pole / trekking-poles) && ( tub footprint / meshBody / ripstopBody)
    // raindrop1 = '1' && '9' && '5' && '10' && '3'
    // raindrop2 = '1' && '9' && '5' && '11' && '3'

    // raindrop3 = '1' && '9' && '5' && '10' && '7'
    // raindrop4 = '1' && '9' && '5' && '11' && '7'

    // raindrop5 = '1' && '9' && '5' && '10' && '6'
    // raindrop6 = '1' && '9' && '5' && '11' && '6'
    if ( ( selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('5') && selectedParts.includes('10') && selectedParts.includes('3') ) || ( selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('5') && selectedParts.includes('11') && selectedParts.includes('3') ) || ( selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('5') && selectedParts.includes('10') && selectedParts.includes('7') ) || ( selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('5') && selectedParts.includes('11') && selectedParts.includes('7') ) || ( selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('5') && selectedParts.includes('10') && selectedParts.includes('6') ) || ( selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('5') && selectedParts.includes('11') && selectedParts.includes('6') ) ){

      return <FontAwesome className="fa fa-tint increase-icon raindrop" name='raindrop' aria-hidden="true" />
    } else {
      return <FontAwesome className="fa fa-tint increase-icon raindrop decrease-opacity" name='raindrop' aria-hidden="true" />
    }
  }

  showBug(selectedParts) {
    // needs webtruss, cross-poles, (ripstopBody / meshBody / DropIn mesh Body), (bow-pole / trekking-poles)
    // bug-bow1 = '1' && '9' && '6' && '10'
    // bug-bow2 = '1' && '9' && '7' && '10'
    // bug-bow3 = '1' && '9' && '8' && '10'

    // bug-trek1 = '1' && '9' && '6' && '11'
    // bug-trek2 = '1' && '9' && '7' && '11'
    // bug-trek3 = '1' && '9' && '8' && '11'
    if ( (selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('6') && selectedParts.includes('10')) || (selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('7') && selectedParts.includes('10')) || (selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('8') && selectedParts.includes('3') && selectedParts.includes('10')) || (selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('6') && selectedParts.includes('11')) || (selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('7') && selectedParts.includes('11')) || (selectedParts.includes('1') && selectedParts.includes('9') && selectedParts.includes('8') && selectedParts.includes('3') && selectedParts.includes('11'))) {

      return <FontAwesome className="fa fa-bug increase-icon bugs" name='bugs' aria-hidden="true" />
    } else {
      return <FontAwesome className="fa fa-bug increase-icon bugs decrease-opacity" name='bugs' aria-hidden="true" />
    }
  }

  render () {
    let selectedParts = Object.keys(this.props.partsInCart);

    return (
      <div className='conditions-protection'>
        <h5>Protects you from:</h5>
        {this.showSnowflake(selectedParts)}
        {this.showRaindrop(selectedParts)}
        {this.showBug(selectedParts)}
      </div>
    );
  }
}

export default EnvironmentConditions;
