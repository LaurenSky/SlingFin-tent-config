import React, { Component } from 'react';
import logo from './images/SF-logo-nature.png';
import 'normalize.css';
import './App.css';

import PartCategory from './components/Accordion/PartCategory';
import ImageCarousol from './components/Carousol/Carousol';
import EnvironmentConditions from './components/Conditions/Conditions';
import TentDetails from './components/TentDetails/TentDetails';
import TentDimensions from './components/TentDimensions/TentDimensions';
import Cart from './components/Cart/Cart';

import Footer from './components/Footer/Footer';

import { Row, Col } from 'react-bootstrap';



class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      partInCart: false
    }
  }

  partStateUpdate(value, part) {
    let newState = {};
    newState[part.name] = {
      value: value,
      partInfo: part
      // partName: part.name
    };
    this.setState({
      partInCart: newState
    })
  }

  render() {
    console.log("partInCart value in APP: ", this.state.partInCart)


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
              <PartCategory data={this.props.data} category='WebTruss' partStateUpdate={this.partStateUpdate.bind(this)} />
              <PartCategory data={this.props.data} category='Poles' partStateUpdate={this.partStateUpdate.bind(this)} />
              <PartCategory data={this.props.data} category='FootPrint' partStateUpdate={this.partStateUpdate.bind(this)} />
              <PartCategory data={this.props.data} category='Flysheet' partStateUpdate={this.partStateUpdate.bind(this)}/>
              <PartCategory data={this.props.data} category='InnerTentBodies' partStateUpdate={this.partStateUpdate.bind(this)} />
              <PartCategory data={this.props.data} category='Accessories' partStateUpdate={this.partStateUpdate.bind(this)} />
            </Col>
            <Col xs={5} lg={6} className="img-carousol bkgrd">
              <h4 className='configuration-title'>Your Configuration Details:</h4>
              <ImageCarousol />
                <Row>
                  <Col xs={4} md={4} className='bkgrd'>
                    <EnvironmentConditions />
                  </Col>
                  <Col xs={12} md={12} className='bkgrd'>
                    <TentDetails data={this.props.data}/>
                  </Col>
                </Row>
            </Col>

            <Col xs={6} md={5} className="parts-selected bkgrd">
              <h3 className='cart-header'>List of Items selected</h3>
              <Cart partInCart={this.state.partInCart} />
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