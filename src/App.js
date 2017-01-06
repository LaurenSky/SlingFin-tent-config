import React, { Component } from 'react';
import logo from './images/SF-logo.jpg';
import './App.css';
import AccordionCategory from './components/accordion/accordion-category';
import ImageCarousol from './components/carousol/carousol';
import EnvironmentConditions from './components/conditions/conditions';

var FontAwesome = require('react-fontawesome');
import Footer from './components/footer/footer';


class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>SlingFin CrossBow2 Tent System Configurator</h2>
        </header>
        <p className="App-intro">
          Design the perfect tent system to fit your needs.
        </p>
        <div className="img-carousol">
          <ImageCarousol />
        </div>
        <h3>WEIGHT SCALE GOES HERE</h3>
        <h3>PRICE SCALE GOES HERE</h3>
        <h3>COMFORT SCALE GOES HERE</h3>

        <EnvironmentConditions />

        <h3>List of Items selected split up by owned already and for  purchase or what configs you can make currently plus extra parts</h3>
        <h3>Alert Box: GOES HERE</h3>

        <hr/>
        <div>
          <h3>Configure your tent here:</h3>
          <AccordionCategory data={this.props.data.webtrusses} />
          <AccordionCategory data={this.props.data.footprints} />
          <AccordionCategory data={this.props.data.innerTentBodies} />
          <AccordionCategory data={this.props.data.poles} />
          <AccordionCategory data={this.props.data.accessories} />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}



export default App;
