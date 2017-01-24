import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import DeleteButton from './DeleteButton';
import SendEmail from './Email'
let money = require("money-math");


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
    let orderItemsPrices = [];
    let total = '0.00';
    let props = this.props.parts

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          console.log("in iterate!!!!" , key, value.partInfo)
          partsInCart.push(value.partInfo)
          // console.log('MY PART ARRAY:' , partsInCart)
          orderItems.push(value.partInfo.name)
          orderItemsPrices.push(value.partInfo.price)
        }
      );
    }


    for (let i = 0 ; i < orderItemsPrices.length; i++) {
      total = money.add(total, orderItemsPrices[i])
    }



    const options = {
    noDataText: 'There are no parts in your cart yet :( ',
    // exportCSVBtn: this.createCustomExportCSVButton
    };

    const deleteFunction = this.props.deletePart

    function addDeleteIcon(cell, row) {
      console.log('cell: ', cell)
      console.log('row: ', row)
      return <DeleteButton row={row} deletePart={deleteFunction}/>
    }

    return (
      <section>
        <article>
          <BootstrapTable data={ partsInCart } options={ options} bordered={ false }>
            <TableHeaderColumn dataField='name'>Part</TableHeaderColumn>
            <TableHeaderColumn dataField='weight'>Weight(grams)</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Price($)</TableHeaderColumn>
            <TableHeaderColumn dataField='id' isKey={ true } dataFormat={ addDeleteIcon }></TableHeaderColumn>
          </BootstrapTable>
        </article>
        <article>
          <SendEmail className='send-email' body={orderItems} prices={orderItemsPrices} total={total} partsInCart={this.props.partsInCart} />
        </article>
      </section>
    );
  }
};
// <TableHeaderColumn dataField='id' hidden isKey={ true }>ID</TableHeaderColumn>
// <TableHeaderColumn datafield='id' dataFormat={ addDeleteIcon }>ID</TableHeaderColumn>


export default NewTable;
