import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import DeleteButton from './DeleteButton';
import SendEmail from './Email'
let money = require("money-math");


class NewTable extends Component {

  render() {

    let partsInCart = [];
    let orderItems = [];
    let orderItemsPrices = [];
    let total = '0.00';
    let props = this.props.parts

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          partsInCart.push(value.partInfo)
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
    };

    const deleteFunction = this.props.deletePart

    function addDeleteIcon(cell, row) {
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
        <article className='send-email-background'>
          <SendEmail className='send-email' body={orderItems} prices={orderItemsPrices} total={total} partsInCart={this.props.partsInCart} />
        </article>
      </section>
    );
  }
};


export default NewTable;
