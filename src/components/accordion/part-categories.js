import React, {Component} from 'react';
import './accordion.css';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


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
          <Row className='recommended-part-header'>
            <Col xs={12} md={12} className='recommended-part-name'>
              <h4>Add a Drop-in Mesh Body to have a 3-season tent</h4>
            </Col>
              <Row>
                <Col xs={9} md={9}>
                  <Button bsStyle="info">Add Drop-in Mesh Body</Button>
                </Col>
                <Col xs={3} md={3}>
                  <h4>
                    ${dropInMeshDetails.price}
                  </h4>
                </Col>
              </Row>
            <Col xs={12} md={12} className='recommended-part-body'>
              <Row>
                <Col xs={12} md={12}>
                  <img src={dropInMeshDetails.main} className="part-image" alt="Part" />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  {dropInMeshDetails.description}
                  ( {dropInMeshDetails.weight}oz )
                </Col>
              </Row>
            </Col>
          </Row>
        )
      }
    };

    const tubFootprint = function(partName) {
      const tubFootprintDetails = propsData.footprints[0]
      if(partName === 'Drop-in Mesh Body') {
        return (
          <Row className='recommended-part-header'>
            <Col xs={12} md={12} className='recommended-part-name'>
              <h4>This Requires a Tub Footprint. (please order one if you don't own one)</h4>
            </Col>
              <Row>
                <Col xs={9} md={9}>
                  <Button bsStyle="info">Add Drop-in Mesh Body</Button>
                </Col>
                <Col xs={3} md={3}>
                  <h4>
                    ${tubFootprintDetails.price}
                  </h4>
                </Col>
              </Row>
            <Col xs={12} md={12} className='recommended-part-body'>
              <Row>
                <Col xs={12} md={12}>
                  <img src={tubFootprintDetails.main} className="part-image" alt="Part" />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  {tubFootprintDetails.description}
                  ( {tubFootprintDetails.weight}oz )
                </Col>
              </Row>
            </Col>
          </Row>
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
          <Row>
            <Col xs={12} md={12}>
              <h5 className='part-name'>
                {part.name}
              </h5>
            </Col>
          </Row>

          <Row>
            <Col xs={4} md={4}>
              <img src={part.main} className="part-image" alt="Part"/>
            </Col>

            <Col xs={8} md={8}>
              <Row>
                <Col xs={12} md={12}>
                  {part.description}
                  ( {part.weight}oz )
                </Col>

                <Row>
                  <Col xs={8} md={8}>
                    {/* Indicates a successful or positive action */}
                    <Button bsStyle="success">Add {part.name}</Button>
                  </Col>

                  <Col xs={4} md={4}>
                    <h4>
                      ${part.price}
                    </h4>
                  </Col>
                </Row>
              </Row>

              <Row>
                <Col xs={12} md={12}>
                  {dropInMeshBody(part.name)}
                </Col>

                <Col xs={12} md={12}>
                  {tubFootprint(part.name)}
                </Col>
              </Row>
            </Col>
          </Row>
        </li>
      )
    })

    return (
      <ul className='part-list-accordion'>
        <div className='accordion-header'>
          <h4>{this.props.category}</h4>
          {partList}
        </div>
      </ul>
    );
  }
}

export default PartCategory;
