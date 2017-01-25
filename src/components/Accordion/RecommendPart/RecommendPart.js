import React, {Component} from 'react';
import '../accordion.css';
import PartButton from '../PartButton';
import EnlargeImage from '../enlargeImage';
let FontAwesome = require('react-fontawesome');
import { Row, Col } from 'react-bootstrap';


class RecommendedPart extends Component {

  render () {
    const part = this.props.part;

    const decideHeader = function(part) {
      if(part ==='Tub Footprint') {
        return (
          <h4 className='warning'><FontAwesome className="fa fa-exclamation-triangle" name='triangle' aria-hidden="true" /> This Requires a Tub Footprint to be functional.</h4>
        )
      } else if(part ==='Drop-in Mesh Body') {
        return (
          <h4><FontAwesome className="fa fa-plus" name='plus' aria-hidden="true" /> Add a Drop-in Mesh Body to have a 3-season tent.</h4>
        )
      }
    }

    if(part === null) {
      return null;
    } else {
      return (
        <Row className='recommended-part-header'>
          <Col xs={12} md={12} className='recommended-part-name'>
            {decideHeader(part.name)}
          </Col>

          <Col xs={11} md={11} className='recommended-part-body'>
            <Row>
              <Col xs={8} md={8} className="recommended-part-image">
                <EnlargeImage lineDrawing={part.lineDrawing} alt={part.name} />
              </Col>
              <Col xs={4} md={4}>
                <h4 className='text-right'>
                  ${part.price}
                </h4>
                <PartButton part={part} type='recommend' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partInCart} showRecommended={this.props.showRecommended} />
              </Col>
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
