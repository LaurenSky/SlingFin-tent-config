import React from 'react';
var FontAwesome = require('react-fontawesome');


class EnvironmentConditions extends React.Component {

  render () {

    return (
      <div className='conditions-protection'>
        <h3>Protected from the following conditions:</h3>
        <FontAwesome className="fa fa-snowflake-o increase-icon snowflake" name='snowflake' aria-hidden="true" />
        <FontAwesome className="fa fa-tint increase-icon raindrop" name='raindrop' aria-hidden="true" />
        <FontAwesome className="fa fa-bug increase-icon bugs" name='bugs' aria-hidden="true" />
      </div>
    );
  }
}

export default EnvironmentConditions;
