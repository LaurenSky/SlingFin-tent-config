import React from 'react';
var FontAwesome = require('react-fontawesome');



class EnvironmentConditions extends React.Component {
  constructor () {
    super();

    this.state = {
      showConditions: false
    }
  }
  _handleClick (){
    this.setState({
      showConditions: !this.state.showConditions
    })
  }

  render () {
    let conditionNodes;
    if (this.state.showConditions) {
      conditionNodes=<div><FontAwesome className="fa fa-snowflake-o increase-icon snowflake" name='snowflake' aria-hidden="true" />
      <FontAwesome className="fa fa-tint increase-icon raindrop" name='raindrop' aria-hidden="true" />
      <FontAwesome className="fa fa-bug increase-icon bugs" name='bugs' aria-hidden="true" /></div>
    }

    let buttonText = 'Show Conditions'
    if (this.state.showConditions) {
      buttonText = 'Hide Conditions';
    }

    return (
      <div className='conditions-protection'>
        <h5>Protects you from:</h5>
        {conditionNodes}
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
      </div>
    );
  }
}

export default EnvironmentConditions;
