import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './images/SF-logo.jpg';
import './App.css';
// import PartsList from './components/accordion/parts-list';
import WebTrussCategory from './components/accordion/WebTruss/web-truss';
import FootprintCategory from './components/accordion/Footprints/footprints';
import InnerTentBodyCategory from './components/accordion/InnerTentBodies/inner-tent-body';

// import Accordion from './components/accordion/accordion';
import Footer from './components/footer/footer';

// import Categories from './parts';



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

        <h3>Main Image goes HERE</h3>
        <h3>IMAGE GALLERY goes HERE</h3>
        <h3>IMAGE GALLERY goes HERE</h3>
        <h3>WEIGHT SCALE GOES HERE</h3>
        <h3>PRICE SCALE GOES HERE</h3>
        <h3>COMFORT SCALE GOES HERE</h3>
        <h3>Protected from (bugs, snow, rain) SCALE GOES HERE</h3>
        <h3>List of Items selected split up by owned already and for  purchase or what configs you can make currently plus extra parts</h3>
        <h3>Alert Box: GOES HERE</h3>

        <hr/>
        <div>
          <h3>Configure your tent here:</h3>
          <WebTrussCategory data={this.props.data.webtrusses} />
          <FootprintCategory data={this.props.data.footprints} />
          <InnerTentBodyCategory data={this.props.data.innerTentBodies} />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

// <PartsList data={this.props.data} />




export default App;
