import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import DeleteButton from './DeleteButton';
import SendEmail from './Email'


class NewTable extends Component {
  // determineBody() {
  //   let partsInCart = [];
  //
  //   Object.entries(this.props.parts).forEach(
  //     ([key, value]) => {
  //       console.log("in iterate!!!!" , key, value.partInfo)
  //       partsInCart.push(key)
  //       // console.log('MY PART ARRAY:' , partsInCart)
  //     }
  //   );
  //
  //   return partsInCart
  // }

  render() {
    // console.log(">>>> I'm creating a table!")
    // console.log('parts in table', this.props.parts);

    let partsInCart = [];
    let orderItems = [];

    Object.entries(this.props.parts).forEach(
      ([key, value]) => {
        console.log("in iterate!!!!" , key, value.partInfo)
        partsInCart.push(value.partInfo)
        // console.log('MY PART ARRAY:' , partsInCart)
        orderItems.push(value.partInfo.name)
      }
    );

    const options = {
    noDataText: 'There are no parts in your cart yet :( ',
    exportCSVBtn: this.createCustomExportCSVButton
    };

    const deleteFunction = this.props.deletePart

    function addDeleteIcon(cell, row) {
      console.log('cell: ', cell)
      console.log('row: ', row)
      return <DeleteButton row={row} deletePart={deleteFunction}/>
    }

    return (
      <div>
        <BootstrapTable data={ partsInCart } options={ options} bordered={ false } exportCSV>
          <TableHeaderColumn dataField='name'>Part</TableHeaderColumn>
          <TableHeaderColumn dataField='weight'>Weight(grams)</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Price($)</TableHeaderColumn>
          <TableHeaderColumn dataField='id' isKey={ true } dataFormat={ addDeleteIcon }></TableHeaderColumn>
        </BootstrapTable>
        <SendEmail className='send-email' body={orderItems} partsInCart={this.props.partsInCart} />
      </div>
    );
  }
};
// <TableHeaderColumn dataField='id' hidden isKey={ true }>ID</TableHeaderColumn>
// <TableHeaderColumn datafield='id' dataFormat={ addDeleteIcon }>ID</TableHeaderColumn>


export default NewTable;
