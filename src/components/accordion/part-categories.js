import React, {Component} from 'react';
import './accordion.css';
import { Button } from 'react-bootstrap';



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
      const dropInMeshDetails = propsData.innerTentBodies[2]
      if(partName === 'Tub Footprint') {
        return (
          <div className='recommended-part-header'>
            <div className='recommended-part-body'>
              <h5><strong>Add a Drop-in Mesh Body to this to have a 3-season tent</strong></h5>
              <img src={dropInMeshDetails.main} className="part-image" alt="Part" />
              <Button bsStyle="info">Add Drop-in Mesh Body</Button>
              <p>
                {dropInMeshDetails.description}
              </p>
              <p>
                Price: ${dropInMeshDetails.price}
              </p>
              <p>
                Weight(oz): {dropInMeshDetails.weight}
              </p>
            </div>
          </div>
        )
      }
    };

    const tubFootprint = function(partName) {
      const tubFootprintDetails = propsData.footprints[0]
      if(partName === 'Drop-in Mesh Body') {
        return (
            <div className='recommended-part-header'>
              <div className='recommended-part-body'>
                <h5><strong>You need a Tub Footprint for this to be functional. Would You Like to add a Tub Footprint</strong></h5>
                <img src={tubFootprintDetails.main} className="part-image" alt="Part" />
                {/* Indicates a successful or positive action */}
                <Button bsStyle="info">Add Tub Footprint</Button>
                <p>
                  {tubFootprintDetails.description}
                </p>
                <p>
                  Price: ${tubFootprintDetails.price}
                </p>
                <p>
                  Weight(oz): {tubFootprintDetails.weight}
                </p>
              </div>
            </div>
        )
      }
    };

    const propsData = this.props.data;
    const propsCategory = this.props.category;
    const data = categoryData(propsCategory, propsData);
    // console.log("new data: ", data)


    const partList = data.map(part => {
      // console.log(part.category, part.name)
      return(
        <li key={part.id} className='accordion-body'>
          <h4 className='part-name'>
            {part.name}
          </h4>

          <p>
            <img src={part.main} className="part-image" alt="Part"/>
          </p>

          {/* Indicates a successful or positive action */}
          <Button bsStyle="success">Add {part.name}</Button>

          <p>
            {part.description}
          </p>
          <p>
            Price: ${part.price}
          </p>
          <p>
            Weight(oz): {part.weight}
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
