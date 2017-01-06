import React, {Component} from 'react';
import './img-gallery.css';

class ImageGallery extends Component {

  render () {
    const data = this.props.data.innerTentBodies;

    const imageGallery1 = data[0].gallery1
    const imageGallery2 = data[0].gallery2


    return (
      <div>
        <img src={imageGallery1} className="img-gallery" alt="tent-main-img" />
        <img src={imageGallery2} className="img-gallery" alt="tent-main-img" />
      </div>
    );
  }
}

export default ImageGallery;
