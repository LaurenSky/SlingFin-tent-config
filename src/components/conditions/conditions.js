import React from 'react';
let FontAwesome = require('react-fontawesome');


class EnvironmentConditions extends React.Component {
 // meshbodyID = 7
 // ripstopID = 6
 // dropinMeshID = 8
 // flysheetID = 5

  showSnowflake() {

  }

  showRaindrop() {

  }

  showBug() {
    const partsInCart = this.props.partsInCart

    if (Object.keys(partsInCart).includes(6) || Object.keys(partsInCart).includes(7) || Object.keys(partsInCart).includes(8)) {
      return true
    }
  }

  render () {
    let snowflake;
    let raindrop;
    let bug;

    console.log(">>>>>>-------- in conditions: ", this.props.partInCart)
    console.log(this.props.partInCart)

    if (this.showSnowflake.bind(this) === true) {
      snowflake = <FontAwesome className="fa fa-snowflake-o increase-icon snowflake" name='snowflake' aria-hidden="true" />
    }

    if (this.showRaindrop.bind(this) === true) {
      raindrop = <FontAwesome className="fa fa-tint increase-icon raindrop" name='raindrop' aria-hidden="true" />
    }

    if (this.showBug.bind(this) === true) {
      bug = <FontAwesome className="fa fa-bug increase-icon bugs" name='bugs' aria-hidden="true" />
    }


    return (
      <div className='conditions-protection'>
        <h5>Protects you from:</h5>
        {snowflake}
        {raindrop}
        {bug}
      </div>
    );
  }
}

export default EnvironmentConditions;
