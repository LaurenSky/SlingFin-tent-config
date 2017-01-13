import React from 'react';
let FontAwesome = require('react-fontawesome');


class EnvironmentConditions extends React.Component {
 // meshbodyID = 7
 // ripstopID = 6
 // dropinMeshID = 8
 // flysheetID = 5

  showSnowflake(partsInCart) {
    if (Object.keys(partsInCart).includes('6') && Object.keys(partsInCart).includes('5')) {
      console.log(true)
      console.log("^^^^^^^^ I'm showing a snowflake")
      return <FontAwesome className="fa fa-snowflake-o increase-icon snowflake" name='snowflake' aria-hidden="true" />
    } else {
      console.log(false)
      return false
    }
  }

  showRaindrop(partsInCart) {
    if (Object.keys(partsInCart).includes('5')) {
      console.log(true)
      console.log("^^^^^^^^ I'm showing a raindrop")
      return <FontAwesome className="fa fa-tint increase-icon raindrop" name='raindrop' aria-hidden="true" />
    } else {
      console.log(false)
      return false
    }
  }

  showBug(partsInCart) {
    if (Object.keys(partsInCart).includes('6') || Object.keys(partsInCart).includes('7') || Object.keys(partsInCart).includes('8')) {
      console.log(true)
      console.log("^^^^^^^^ I'm showing a bug")
      return <FontAwesome className="fa fa-bug increase-icon bugs" name='bugs' aria-hidden="true" />
    } else {
      console.log(false)
      return false
    }
  }

  render () {
    const partsInCart = this.props.partInCart
    console.log("^^^^^^^keys in conditions: ----" , Object.keys(partsInCart))


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
