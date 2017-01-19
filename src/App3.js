import React, { Component } from 'react';
import logo from './images/SF-logo-nature.png';
import 'normalize.css';
import './App.css';

import PartCategory from './components/Accordion/PartCategory';
import ImageCarousol from './components/Carousol/carousol';
import EnvironmentConditions from './components/Conditions/conditions';
import TentDetails from './components/TentDetails/TentDetails';
import TentDimensions from './components/TentDimensions/TentDimensions';
import Cart from './components/Cart/cart';

import AccordionTest from './components/Accordion/old/accordion'

import Footer from './components/Footer/Footer';

import { Row, Col } from 'react-bootstrap';
import { Accordion, Panel } from 'react-bootstrap';


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
              <a className="slingfin" href="http://www.slingfin.com/store/Tents/treeline-tents" target="new"><img src={logo} className="App-logo" alt="logo" /></a>
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

          <Row>

            <Col xs={6} lg={4} className='no-padding'>
              <AccordionTest data={this.props.data} partStateUpdate={this.partStateUpdate.bind(this)} partsInCart={this.state.partsInCart}/>
              <Accordion>
                <Panel header='WebTruss' eventKey='1'>
                  <PartCategory data={this.props.data} category='WebTruss' partStateUpdate={this.partStateUpdate.bind(this)} partInCart={this.state.partsInCart} />
                </Panel>

                <Panel header='Poles' eventKey='2'>
                  <PartCategory data={this.props.data} category='Poles' partStateUpdate={this.partStateUpdate.bind(this)} partInCart={this.state.partsInCart} />
                </Panel>

                <Panel header='FootPrints' eventKey='3'>
                  <PartCategory data={this.props.data} category='FootPrint' partStateUpdate={this.partStateUpdate.bind(this)} partInCart={this.state.partsInCart} />
                </Panel>

                <Panel header='FlySheets' eventKey='4'>
                  <PartCategory data={this.props.data} category='Flysheet' partStateUpdate={this.partStateUpdate.bind(this)} partInCart={this.state.partsInCart} />
                </Panel>

                <Panel header='Inner Tent Bodies' eventKey='5'>
                  <PartCategory data={this.props.data} category='InnerTentBodies' partStateUpdate={this.partStateUpdate.bind(this)} partInCart={this.state.partsInCart} />
                </Panel>

                <Panel header='Accessories' eventKey='6'>
                  <PartCategory data={this.props.data} category='Accessories' partStateUpdate={this.partStateUpdate.bind(this)} partInCart={this.state.partsInCart} />
                </Panel>

            </Accordion>
            </Col>
            <Col xs={5} lg={6} className="img-carousol bkgrd">
              <h4 className='configuration-title'>Your Configuration Details:</h4>
              <ImageCarousol partsInCart={this.state.partsInCart} data={this.props.data}/>
                <Row>
                  <Col xs={4} md={4} className='bkgrd'>
                    <EnvironmentConditions partsInCart={this.state.partsInCart} />
                  </Col>
                  <Col xs={12} md={12} className='bkgrd'>
                    <TentDetails partsInCart={this.state.partsInCart}/>
                  </Col>
                </Row>
            </Col>

            <Col xs={6} md={5} className="parts-selected bkgrd">
              <h3 className='cart-header'>List of Items selected</h3>
              <Cart partInCart={this.state.partsInCart} deletePart={this.deletePart.bind(this)} />
              <h3 className='cart-header'>List of Accessories selected</h3>
            </Col>

            <Col xs={6} md={5} className="bkgrd">
              <TentDimensions/>
            </Col>

            <Col xs={6} md={5} className="alert-box bkgrd">
              <h4>Alert Box: GOES HERE</h4>
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

export default App;