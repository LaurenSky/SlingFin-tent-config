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

        <div className="tent-details">
          <h4>Minimum Trail Weigth: $____</h4>
          <h4>Peak Height:   _____</h4>
          <h4>PRICE: $____</h4>
          <h4>Sq. Footage:</h4>
          <h5>Body: ____</h5>
          <h5>Vestibule: ____</h5>
          <h4># Doors: 2(side)</h4>
          <h4>Packed Size: _____</h4>

          <h4>COMFORT: ____ /5(sleeping on clouds)</h4>
        </div>

        <div>
          <EnvironmentConditions />
        </div>

        <div className="parts-selected">
          <h4>List of Items selected</h4>
          <h4>List of Accessories selected</h4>
        </div>

        <div className="alert-box">
          <h4>Alert Box: GOES HERE</h4>
        </div>

        <hr/>
        <div>
          <h4>Configure your tent here:</h4>
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
