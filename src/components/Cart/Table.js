import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


class NewTable extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     parts: [],
  //     accessories: []
  //   }
  // }


  render() {
    console.log(">>>> I'm creating a table!")
    const partsInCart = this.props.parts;
    console.log('parts in table' ,partsInCart);

    var rows = [];
    for (var i = 0; i < rows.length; i++) {
        rows.push(partsInCart.map(function(part) {
          <tr key={part.id}>
            <td>{part.name}</td>
            <td>{part.weight}</td>
            <td>{part.price}</td>
          </tr>
        }));
    }

    const makeRows = function() {
      // return (
      //   <tbody>
      //     {partsInCart.map(function(part) {
      //       console.log("part", part);
      //     <tr key={part.id}>
      //       <td>{part.name}</td>
      //       console.log("partname", part.name);
      //       <td>{part.weight}</td>
      //       <td>{part.price}</td>
      //     </tr>
      //   })}
      //   </tbody>
      // )
    }
    // };


    // const row = function() {parts.forEach(function(part){
    //   console.log(part);
    //
    //   let name = <td>{part.name}</td>;
    //   let weight = <td>{part.weight}</td>;
    //   let price = <td>{part.price}</td>;
    //
    //   let row = <tr id={part.id}>{name}{weight}{price}</tr>;
    //   console.log("row: ", row)
    //   return (
    //     row
    //   )
    // })};


    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Part</th>
            <th>Weight (oz)</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
};

export default NewTable;
