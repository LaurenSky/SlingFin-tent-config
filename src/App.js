import React, { Component } from 'react';
import logo from './images/SF-logo-nature.png';
import './App.css';

// import AccordionCategory from './components/accordion/accordion-category';
import PartCategory from './components/accordion/part-categories';


import ImageCarousol from './components/carousol/carousol';
import EnvironmentConditions from './components/conditions/conditions';
import TentDetails from './components/TentDetails/tent-details';
import TentDimensions from './components/TentDimensions/tent-dimensions';
import Footer from './components/footer/footer';

import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';



// <Row className='show-grid'>

class App extends Component {
  render() {

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
            <Col xs={12} md={4} className='no-padding'>
              <PartCategory data={this.props.data} category='WebTruss' />
              <PartCategory data={this.props.data} category='Poles' />
              <PartCategory data={this.props.data} category='FootPrint' />
              <PartCategory data={this.props.data} category='Flysheet' />
              <PartCategory data={this.props.data} category='InnerTentBodies' />
              <PartCategory data={this.props.data} category='Accessories' />
            </Col>
            <Col xs={12} md={6} className="img-carousol bkgrd">
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
              <h4>List of Items selected</h4>
              <h4>List of Accessories selected</h4>
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

// <PartCategory data={this.props.data} category={this.props.data.webtrusses[0].category} />
// <PartCategory data={this.props.data} category={this.props.data.poles[0].category} />
// <PartCategory data={this.props.data} category={this.props.data.footprints[0].category} />
// <PartCategory data={this.props.data} category={this.props.data.flysheets[0].category} />
// <PartCategory data={this.props.data} category={this.props.data.innerTentBodies[0].category} />
// <PartCategory data={this.props.data} category={this.props.data.accessories[0].category} />



export default App;
