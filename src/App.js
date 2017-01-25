import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
require('core-js/fn/object/entries');
import logo from './images/SF-logo-nature.png';
import './App.css';

import ImageCarousol from './components/Carousol/Carousol';
import EnvironmentConditions from './components/Conditions/conditions';
import TentDimensions from './components/TentDimensions/TentDimensions';
import CartModal from './components/Cart/cartmodal';
import Cart from './components/Cart/cart';
import TrailWeight from './components/TentDetails/trail-weight';
// import PackWeight from './components/TentDetails/pack-weight';
import Cost from './components/TentDetails/cost';
import Footer from './components/Footer/Footer';
import StartOptions from './components/Welcome/StartOptions';

const styles = {
  active: {
    display: 'inherit'
  },

  inactive: {
    display: 'none'
  }
};


class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      partsInCart: false
    }

    this.partStateConfig.bind(this)
  }

  partStateConfig(parts) {
    // console.log('$$$ Im in partstateconfig', parts)
    if (parts === false) {
      this.setState({
        partsInCart: false
      });
    } else {
      let newState = {}; //Duplicate state.

      Object.entries(parts).forEach(
        ([key, value]) => {
          newState[key] = {
            value: true,
            partInfo: value
          }
        }
      );

      this.setState({
        partsInCart: newState
      });
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
    // console.log('>>>>>In APP ready to delete Part: ', partId)

    const newState = {...this.state.partsInCart}; //Duplicate state.
    delete newState[partId];                  //remove Item form stateCopy.
    this.setState({
      partsInCart: newState
    })
  }

  render() {
    // console.log("partInCart value in render APP: ", this.state.partsInCart)
    const stateStyle = (!this.state.partsInCart) ? styles.inactive : styles.active;

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
          <Row className="App-intro">
            <Col xs={10} lg={10} className="">
              <p>Design a tent system to fit your needs.</p>
            </Col>
            <Col xs={1} lg={1} className="pull-right">
              <CartModal partInCart={this.state.partsInCart} deletePart={this.deletePart.bind(this)} />
            </Col>
          </Row>

          <Row className='add-margin'>
            <Col xs={5} lg={5} className="img-carousol add-margin bkgrd add-padding-bottom">
              <h4 className='configuration-title'>Your Configuration Details</h4>
              <Row className='add-margin'>
                <ImageCarousol partsInCart={this.state.partsInCart} data={this.props.data} tentConfigPics={this.props.tentConfigPics} />
              </Row>

              <Row className="parts-selected bkgrd add-margin">
                  <h3 className='cart-header'>List of Items selected</h3>
              </Row>

              <Row className='add-margin' style={stateStyle}>
                <Col xs={4} md={4} className='tent-details center-text cost-bug-weight'>
                  <Cost partsInCart={this.state.partsInCart} />
                </Col>
                <Col xs={4} md={4} className='tent-details cost-bug-weight'>
                  <EnvironmentConditions partsInCart={this.state.partsInCart} />
                </Col>
                <Col xs={4} md={4} className='tent-details cost-bug-weight'>
                  <TrailWeight partsInCart={this.state.partsInCart} />
                </Col>
              </Row>

              <Row className="parts-selected bkgrd add-margin">
                  <Cart partInCart={this.state.partsInCart} deletePart={this.deletePart.bind(this)} />
              </Row>

              <Row className="add-margin">
                <Col xs={12} md={12} className='no-padding'>
                  <TentDimensions />
                </Col>
              </Row>
            </Col>

            <Col xs={6} md={6} className="alert-box bkgrd add-margin add-padding">
              <div className='tent-details'>
                  <h4>Welcome to the SlingFin CrossBow2 Tent Configurator.</h4>
              </div>
            </Col>

            <Col xs={6} md={6} className="bkgrd add-margin add-padding">
              <StartOptions data={this.props.data} partStateConfig={this.partStateConfig.bind(this)} partStateUpdate={this.partStateUpdate.bind(this)} partsInCart={this.state.partsInCart}/>
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
