import React, {Component} from 'react';
import './accordion.css';


class PartCategory extends Component {

  render () {
    const categoryData = function(category, data) {
      console.log(category)

      if(category==='WebTruss') {
        return data.webtrusses;
      } else if (category==='FootPrint'){
        return data.footprints;
      } else if (category==='InnerTentBodies') {
        return data.innerTentBodies;
      } else if (category==='FlySheet') {
        return data.poles;
      } else if (category==='Poles') {
        return data.poles;
      } else if (category==='Accessories') {
        return data.accessories;
      } else {
        return []
      }
    }

    const dropInMeshBody = function(partName) {
      if(partName === 'Tub Footprint') {
        return (
          <p>Would You Like to add a Drop-in Mesh Body</p>
        )
      }
    };

    const tubFootprint = function(partName) {
      if(partName === 'Drop-in Mesh Body') {
        return (
          <p> You need a Tub Footprint for this to be functional. Would You Like to add a Tub Footprint</p>
        )
      }
    };

    const propsData = this.props.data;
    const propsCategory = this.props.category;
    const data = categoryData(propsCategory, propsData);
    // console.log("new data: ", data)


    const partList = data.map(part => {
      console.log(part.category, part.name)
      return(
        <li key={part.id}>
          <p>
            {part.name}
          </p>
          <p className='accordion-body'>
            {part.description}
          </p>
          {dropInMeshBody(part.name)}
          {tubFootprint(part.name)}
        </li>
      )
    })

    return (
      <ul className='part-list-accordion'>
        <div className='accordion-header'>
          <h3>{this.props.category}</h3>
          {partList}
        </div>
      </ul>
    );
  }
}

export default PartCategory;
