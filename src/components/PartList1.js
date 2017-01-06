import React, {Component} from 'react';

class PartsList extends Component {
  render () {
    const data = this.props.data;
    // OR const {data} = this.props

    const partList = data.map(part => {
      console.log(part.category, part.name)
      return (
        <li key={part.id} className={part.category}>{part.name}</li>
      )
    })

    return (
      <ul>
        {partList}
      </ul>
    );
  }
}

export default PartsList;
