import React, {Component} from 'react';
let FontAwesome = require('react-fontawesome');
import { Button } from 'react-bootstrap';


class DeleteButton extends Component {
  render () {
    const deleteButton = <Button bsStyle='link'><FontAwesome className="fa fa-trash-o" name='bugs' aria-hidden="true" /></Button>

    return (
      deleteButton
    );
  }
}

export default DeleteButton;
