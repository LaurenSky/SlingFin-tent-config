import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import logo from './images/SF-logo-nature.png';
// import 'normalize.css';
import './App.css';
import { Row, Col } from 'react-bootstrap';

import PartCategory from './components/Accordion/PartCategory';
import ImageCarousol from './components/Carousol/carousol';
import EnvironmentConditions from './components/Conditions/conditions';
import TentDimensions from './components/TentDimensions/TentDimensions';
import Cart from './components/Cart/cart';
import TrailWeight from './components/TentDetails/trail-weight';
import PackWeight from './components/TentDetails/pack-weight';
import NumPoles from './components/TentDetails/num-poles';
import Cost from './components/TentDetails/cost';
import AccordionPanelItems from './components/Accordion/accordion'
import Footer from './components/Footer/Footer';


class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      partsInCart: false
    }
  }

  partStateUpdate(value, part) {
    if (value === true) {
      let newState = {...this.state.partsInCart}; //Duplicate state.
      newState[part.id] = {
        value: value,
        partInfo: part
      }                  //remove Item form stateCopy.
      this.setState({
        partsInCart: newState
      });
    } else {
      this.deletePart(part.id)
    }

  }

  deletePart(partId) {
    console.log('>>>>>In APP ready to delete Part: ', partId)
    // delete this.state.parts[partName]
    // this.props.partStateUpdate(false, part, partName)

    const newState = {...this.state.partsInCart}; //Duplicate state.
    delete newState[partId];                  //remove Item form stateCopy.
    this.setState({
      partsInCart: newState
    })
  }


  render() {
    console.log("partInCart value in render APP: ", this.state.partsInCart)


    return (
      <section className="App">
        <header className="App-header">
          <Row>
            <Col xs={12} md={8}>
              <a className="slingfin" href="http://www.slingfin.com/store/Tents/treeline-tents" target="new"><img src={logo} className='SF-logo-main' alt="logo" /></a>
            </Col>
            <Col xs={12} md={4} className="page-title">
              <h2>SlingFin CrossBow2 Tent System Configurator</h2>
            </Col>

          </Row>
        </header>
        <section className='background-img'>
          <article className="App-intro">
            <p>Design the perfect tent system to fit your needs.</p>
          </article>

          <Row className='add-margin'>
            <Col xs={5} lg={5} className="img-carousol add-margin bkgrd add-padding-bottom">
              <Row className='add-margin'>
                <Row>
                  <Col xs={4} md={4} className='tent-details'>
                    <Cost partsInCart={this.state.partsInCart} />
                  </Col>
                  <Col xs={4} md={4} className='tent-details'>
                    <EnvironmentConditions partsInCart={this.state.partsInCart} />
                  </Col>
                </Row>
                <Row className='tent-details'>
                  <Col xs={6} md={6}>
                    <TrailWeight partsInCart={this.state.partsInCart} />
                  </Col>
                  <Col xs={6} md={6}>
                    <PackWeight partsInCart={this.state.partsInCart} />
                  </Col>
                </Row>
              </Row>
              <Row className='add-margin'>
                <h4 className='configuration-title'>Your Configuration Details:</h4>
                <ImageCarousol partsInCart={this.state.partsInCart} data={this.props.data}/>
              </Row>

              <Row className="parts-selected bkgrd add-margin">
                  <h3 className='cart-header'>List of Items selected</h3>
                  <Cart partInCart={this.state.partsInCart} deletePart={this.deletePart.bind(this)} />
                  <h3 className='cart-header'>List of Accessories selected</h3>
              </Row>
              
              <Row className="add-margin">
                <Col xs={12} md={12}>
                  <TentDimensions />
                </Col>
              </Row>
            </Col>

            <Col xs={6} md={6} className="alert-box bkgrd add-margin add-padding">
              <div className='tent-details'>
                <h4>Welcome to the SlingFin CrossBow2 Tent Configurator.</h4>
                <p>Follow the steps below to add an remove parts and accessories to design a tent system that fits your life.</p>
              </div>
            </Col>


            <Col xs={6} lg={6} className='no-padding add-margin'>
              <AccordionPanelItems data={this.props.data} partStateUpdate={this.partStateUpdate.bind(this)} partsInCart={this.state.partsInCart}/>
            </Col>
          </Row>

          <hr/>
        </section>

        <footer>
          <Footer />
        </footer>
      </section>
    );
  }
}
// <Row><TentDetails partsInCart={this.state.partsInCart}/></Row>

export default App;
