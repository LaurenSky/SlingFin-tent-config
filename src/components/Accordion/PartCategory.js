import React, {Component} from 'react';
import './accordion.css';
import { Row, Col } from 'react-bootstrap';
import RecommendPart from './RecommendPart/RecommendPart';
import PartButton from './PartButton';
import EnlargeImage from './enlargeImage';


const styles = {
  active: {
    display: 'inherit'
  },

  inactive: {
    display: 'none'
  }
};

class PartCategory extends Component {
  constructor(props) {
    super();
    this.state = {
      show: true,
      partsInCart: props.partInCart,
    };
  }

  // showRecommended() {
  //   this.setState({
  //     show: !this.state.show
  //   })
  // }


  render () {
    const showStyle = this.state.show ? styles.active : styles.inactive;

    const categoryData = function(category, data) {
      if(category==='WebTruss') {
        return data.webtrusses;
      } else if (category==='FootPrint'){
        return data.footprints;
      } else if (category==='InnerTentBodies') {
        return data.innerTentBodies;
      } else if (category==='Flysheet') {
        return data.flysheets;
      } else if (category==='Poles') {
        return data.poles;
      } else if (category==='Accessories') {
        return data.accessories;
      }
    }

    const data = categoryData(this.props.category, this.props.data);

    const partList = data.map(part => {
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
            <Col xs={4} md={4} className='text-right'>
              <EnlargeImage lineDrawing={part.lineDrawing} thumbnail={part.thumbnail} partName={part.name} className="part-image" />
            </Col>

            <Col xs={8} md={8}>
              <Row>
                <Col xs={12} md={12}>
                  {part.description}
                  ( {part.weight}oz )
                </Col>
              </Row>

              <Row>
                <Col xs={8} md={8}>
                  <PartButton part={part} type='normal'  partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partInCart} />
                </Col>

                <Col xs={4} md={4}>
                  <h4>
                    ${part.price}
                  </h4>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={showStyle}>
            <Col xs={10} md={10} className='recommended-part-container'>
              <RecommendPart  part={part.recommend} partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partInCart} showRecommended={null} />
            </Col>
          </Row>
        </li>
      )
    })

    return (
        <ul className='part-list-accordion'>
          <div className='accordion-header'>
            {partList}
          </div>
        </ul>
    );
  }
}

export default PartCategory;
