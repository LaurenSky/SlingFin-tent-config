import React, { Component } from 'react';
import logo from './images/SF-logo-nature.png';
import './App.css';

import AccordionCategory from './components/accordion/accordion-category';
import PartCategory from './components/accordion/part-categories';


import ImageCarousol from './components/carousol/carousol';
import EnvironmentConditions from './components/conditions/conditions';
import TentDetails from './components/TentDetails/tent-details';
import Footer from './components/footer/footer';

import Checkboxes from './components/checkbox/checkbox';
import { Button } from 'react-bootstrap';




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

        <Button bsStyle="success">Success</Button>

        <div className="tent-details">
          <TentDetails data={this.props.data}/>
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
          <Checkboxes />
        </div>

        <hr/>
          <div>
            <h4>Configure your tent here:</h4>
            <PartCategory data={this.props.data} category={this.props.data.webtrusses[0].category} />
            <PartCategory data={this.props.data} category={this.props.data.footprints[0].category} />
            <PartCategory data={this.props.data} category={this.props.data.innerTentBodies[0].category} />
            <PartCategory data={this.props.data} category={this.props.data.poles[0].category} />
            <PartCategory data={this.props.data} category={this.props.data.accessories[0].category} />
          </div>

        <hr/>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

// <div>
//   <h4>Configure your tent here:</h4>
//   <AccordionCategory data={this.props.data.webtrusses} />
//   <AccordionCategory data={this.props.data.footprints} />
//   <AccordionCategory data={this.props.data.innerTentBodies} />
//   <AccordionCategory data={this.props.data.poles} />
//   <AccordionCategory data={this.props.data.accessories} />
// </div>



export default App;
