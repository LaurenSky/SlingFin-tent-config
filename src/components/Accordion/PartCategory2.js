import React, {Component} from 'react';
import './accordion.css';
import { Row, Col } from 'react-bootstrap';
import RecommendPart from './RecommendPart/RecommendPart';
import PartButton from './PartButton';

const styles = {
  active: {
    display: 'inherit'
  },

  inactive: {
    display: 'none'
  }
};

class PartCategory extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('>>>>>><<<<<<< IM IN TOGGLE FOR ACCORDION!!!!: ', this.state.active)
    this.setState({
      active:!this.state.active
    });
  }


  render () {
    const stateStyle = this.state.active ? styles.active : styles.inactive;

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
              <img src={part.lineDrawing} className="part-image" alt="Part"/>
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
                    <PartButton part={part} type='normal' partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partInCart} />
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
                  <RecommendPart  part={part.recommend} partStateUpdate={this.props.partStateUpdate} partInCart={this.props.partInCart} />
                </Col>
              </Row>
            </Col>
          </Row>
        </li>
      )
    })

    return (
      <ul className='part-list-accordion'>
        <section className='accordion-header'>
          <h4 onClick={this.toggle}>{this.props.category}</h4>
          <article style={stateStyle}> {partList} </article>
        </section>
      </ul>
    );
  }
}

export default PartCategory;
