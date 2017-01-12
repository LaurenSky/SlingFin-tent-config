import React, { Component } from 'react';
// import { Table } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
let FontAwesome = require('react-fontawesome');
import DeleteButton from './DeleteButton'

class NewTable extends Component {

  handleRowSelect(row, isSelected, e) {
    console.log("im in a selected row")
  }

  render() {
    console.log(">>>> I'm creating a table!")
    const partsInCart = this.props.parts;
    console.log('parts in table' ,partsInCart);

    const options = {
    noDataText: 'There are no parts in your cart yet :( '
    };

    function addDeleteIcon(cell, row, enumObject) {
      // return <FontAwesome className="fa fa-trash-o" name='bugs' aria-hidden="true" />;
      return <DeleteButton />
    }

    return (
      <BootstrapTable data={ partsInCart } options={ options} bordered={ false }>
        <TableHeaderColumn dataField='id' hidden isKey={ true }>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Part</TableHeaderColumn>
        <TableHeaderColumn dataField='weight'>Weight</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
        <TableHeaderColumn dataFormat={ addDeleteIcon }></TableHeaderColumn>


      </BootstrapTable>
    );
}};

export default NewTable;
