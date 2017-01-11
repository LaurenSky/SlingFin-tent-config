import React, {Component} from 'react';
import '../accordion.css';
import PartButton from '../PartButton';
import { Row, Col } from 'react-bootstrap';


class RecommendedPart extends Component {

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
                <PartButton part={part} type='recommend'/>
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

export default RecommendedPart;
