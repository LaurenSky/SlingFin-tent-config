import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import React, {Component} from 'react';


var Checkboxes = React.createClass({
  getInitialState: function() {
    return {
      parts: ['webtruss','flysheet']
    };
  },

  // componentDidMount: function() {
  //   // Add orange and remove watermelon after 5 seconds
  //   setTimeout(function() {
  //     this.setState({
  //       value: ['webtruss','meshBody']
  //     });
  //   }.bind(this), 5000);
  // },

  render: function() {
    // the checkboxes can be arbitrarily deep. They will always be fetched and
    // attached the `name` attribute correctly. `value` is optional
    return (
      <CheckboxGroup
        name="parts"
        value={this.state.parts}
        onChange={this.partsChanged}>
        <ul>
          <li>
            <label><Checkbox value="webtruss"/> WebTruss</label>
          </li>
          <li>
            <label><Checkbox value="meshBody"/> Mesh Body</label>
          </li>
          <li>
            <label><Checkbox value="ripstopBody"/> Ripstop Body</label>
          </li>
        </ul>
      </CheckboxGroup>
    );
  },
  
  partsChanged: function(newParts) {
    this.setState({
      parts: newParts
    });
  }
});

export default Checkboxes;
