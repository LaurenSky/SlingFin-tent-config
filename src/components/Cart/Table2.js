import React, { Component } from 'react';
// import { Table } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
let FontAwesome = require('react-fontawesome');
import DeleteButton from './DeleteButton'


class GetRowIndexTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ jobs }>
          <TableHeaderColumn dataField='id' isKey>Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Job Name</TableHeaderColumn>
          <TableHeaderColumn dataField='active' dataFormat={ activeFormatter }>Active</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default NewTable;
