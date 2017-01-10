import React, { Component } from 'react';
import logo from './images/SF-logo-nature.png';
import './App.css';

// import AccordionCategory from './components/accordion/accordion-category';
import PartCategory from './components/accordion/part-categories';


import ImageCarousol from './components/carousol/carousol';
import EnvironmentConditions from './components/conditions/conditions';
import TentDetails from './components/TentDetails/tent-details';
import Footer from './components/footer/footer';

import Checkboxes from './components/checkbox/checkbox';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';



// <Row className='show-grid'>

class App extends Component {
  render() {

    return (
      <section className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>SlingFin CrossBow2 Tent System Configurator</h2>
        </header>
        <section className='background-img'>
          <article className="App-intro">
            <p>Design the perfect tent system to fit your needs.</p>
          </article>

          <Row>
            <Col xs={12} md={6}>
              <h4>Configure your tent here:</h4>
              <PartCategory data={this.props.data} category={this.props.data.webtrusses[0].category} />
              <PartCategory data={this.props.data} category={this.props.data.poles[0].category} />
              <PartCategory data={this.props.data} category={this.props.data.footprints[0].category} />
              <PartCategory data={this.props.data}category={this.props.data.innerTentBodies[0].category} />
              <PartCategory data={this.props.data} category={this.props.data.accessories[0].category} />
            </Col>
            <Col xs={12} md={5} className="img-carousol bkgrd">
              <ImageCarousol />
                <Row>
                  <Col xs={6} md={5} className='bkgrd'>
                    <EnvironmentConditions />
                  </Col>
                </Row>
            </Col>

            <Col xs={6} md={5} className="parts-selected bkgrd">
              <h4>List of Items selected</h4>
              <h4>List of Accessories selected</h4>
            </Col>

            <Col xs={6} md={5} className="bkgrd">
              <TentDetails data={this.props.data}/>
            </Col>

            <Col xs={6} md={5} className="alert-box bkgrd">
              <h4>Alert Box: GOES HERE</h4>
              <Checkboxes />
            </Col>
          </Row>





          <hr/>

          </section>

        <hr/>

        <footer>
          <Footer />
        </footer>
      </section>
    );
  }
}



export default App;
