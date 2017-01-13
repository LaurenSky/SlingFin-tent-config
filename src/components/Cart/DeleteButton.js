import React, {Component} from 'react';
let FontAwesome = require('react-fontawesome');
import { Button } from 'react-bootstrap';


class DeleteButton extends Component {
  _handleClick() {
   console.log("clicked delete button on", this.props.row)
   const row = this.props.row;
   const partName = row.name
   console.log('delete this' ,partName)
   this.props.deletePart(partName)
  }

  render () {
    const deleteButton = <Button bsStyle='link'><FontAwesome className="fa fa-trash-o" name='bugs' aria-hidden="true" onClick={this._handleClick.bind(this)} /></Button>


    return (
      deleteButton
    );
  }
}

export default DeleteButton;
