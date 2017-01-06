import React, {Component} from 'react';
import './main-img.css';

class MainImage extends Component {

  render () {
    const data = this.props.data;

    const mainImage = data[0].main

    return (
      <img src={mainImage} className="main-img" alt="tent-main-img" />
    );
  }
}

export default MainImage;
