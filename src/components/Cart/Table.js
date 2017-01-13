import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import DeleteButton from './DeleteButton'

class NewTable extends Component {

  render() {
    console.log(">>>> I'm creating a table!")
    console.log('parts in table', this.props.parts);

    let partsInCart = [];

    Object.entries(this.props.parts).forEach(
      ([key, value]) => {
        console.log("in iterate!!!!" , key, value.details)
        partsInCart.push(value.details)
        console.log('MY PART ARRAY:' , partsInCart)
      }
    );

    const options = {
    noDataText: 'There are no parts in your cart yet :( '
    };

    function addDeleteIcon(cell, row) {
      console.log('cell: ', cell)
      console.log('row: ', row)
      return <DeleteButton row={row}/>
    }

    return (
      <BootstrapTable data={ partsInCart } options={ options} bordered={ false }>
        <TableHeaderColumn dataField='name'>Part</TableHeaderColumn>
        <TableHeaderColumn dataField='weight'>Weight</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
        <TableHeaderColumn dataField='id' isKey={ true } dataFormat={ addDeleteIcon }></TableHeaderColumn>

      </BootstrapTable>
    );
}};
// <TableHeaderColumn dataField='id' hidden isKey={ true }>ID</TableHeaderColumn>
// <TableHeaderColumn datafield='id' dataFormat={ addDeleteIcon }>ID</TableHeaderColumn>


export default NewTable;
