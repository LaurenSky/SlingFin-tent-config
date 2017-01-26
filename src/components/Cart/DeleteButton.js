import React, {Component} from 'react';
let FontAwesome = require('react-fontawesome');
import { Button } from 'react-bootstrap';


class DeleteButton extends Component {
  _handleClick() {
   const row = this.props.row;
   const partId = row.id
   this.props.deletePart(partId)
  }

  render () {
    const deleteButton = <Button bsStyle='link'><FontAwesome className="fa fa-trash-o" name='bugs' aria-hidden="true" onClick={this._handleClick.bind(this)} /></Button>


    return (
      deleteButton
    );
  }
}

export default DeleteButton;
