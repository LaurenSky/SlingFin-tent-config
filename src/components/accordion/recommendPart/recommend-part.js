import React, {Component} from 'react';
import '../accordion.css';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


class recommendedPart extends Component {

  render () {
    const part = this.props.part;

    const decideHeader = function(part) {
      if(part ==='Tub Footprint') {
        return (
          "This Requires a Tub Footprint. (please order one if you don't own one)"
        )
      } else if(part ==='Drop-in Mesh Body') {
        return (
          "Add a Drop-in Mesh Body to have a 3-season tent"
        )
      }
    }

    const decideButtonText = function(partName) {
      if(partName ==='Drop-in Mesh Body') {
        return (
          "Add Drop-in Mesh Body"
        )
      } else if(partName ==='Tub Footprint') {
        return (
          "Add Tub Footprint"
        )
      }
    }

    if(part === null) {
      return null;
    } else {
      return (
        <Row className='recommended-part-header'>
          <Col xs={12} md={12} className='recommended-part-name'>
            <h4>{decideHeader(part.name)}</h4>
          </Col>
            <Row>
              <Col xs={9} md={9}>
                <Button bsStyle="info">{decideButtonText(part.name)}</Button>
              </Col>
              <Col xs={3} md={3}>
                <h4>
                  ${part.price}
                </h4>
              </Col>
            </Row>
          <Col xs={12} md={12} className='recommended-part-body'>
            <Row>
              <Col xs={12} md={12}>
                <img src={part.main} className="part-image" alt="Part" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                {part.description}
                ( {part.weight}oz )
              </Col>
            </Row>
          </Col>
        </Row>
      )
    }
  };
}

export default recommendedPart;
