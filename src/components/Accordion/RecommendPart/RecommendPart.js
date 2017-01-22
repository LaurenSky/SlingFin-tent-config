import React, {Component} from 'react';
import '../accordion.css';
import PartButton from '../PartButton';
import Hover from '../hover';

import { Row, Col } from 'react-bootstrap';


class RecommendedPart extends Component {

  render () {
    const part = this.props.part;

    const decideHeader = function(part) {
      if(part ==='Tub Footprint') {
        return (
          "This Requires a Tub Footprint to be functional."
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
              <Col xs={7} md={7} className='recommended-part-button'>
                <PartButton part={part} type='recommend' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partInCart}/>
              </Col>
              <Col xs={4} md={4}>
                <h4 className='text-right'>
                  ${part.price}
                </h4>
              </Col>
            </Row>
          <Col xs={11} md={11} className='recommended-part-body'>
            <Row>
              <Col xs={12} md={12} className="recommended-part-image">
                <Hover lineDrawing={part.lineDrawing} alt={part.name} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                {part.description}
              </Col>
              <Col xs={12} md={12}>
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
