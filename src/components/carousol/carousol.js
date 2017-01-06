import React from 'react';
import ImageGallery from 'react-image-gallery';
// SCSS
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
// CSS
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
// Webpack
// import "react-image-gallery/styles/css/image-gallery";

// import meshBody from '../../images/SF-logo.jpg';


class ImageCarousol extends React.Component {
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {
    const images = [
      {
        original: 'http://www.slingfin.com/img/products/800/1081_02.jpg',
        // original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://www.slingfin.com/img/products/800/1081_02.jpg',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        originalAlt: 'original-alt',
        thumbnailAlt: 'thumbnail-alt',
        // thumbnailLabel: 'Optional',
        description: 'Optional description...',
        // srcSet: 'Optional srcset (responsive images src)',
        sizes: 'Optional sizes (image sizes relative to thebreakpoint)'
      },
      {
        original: 'http://www.slingfin.com/img/products/800/1081_01.jpg',
        thumbnail: 'http://www.slingfin.com/img/products/800/1081_01.jpg'
      },
      {
        original: 'http://www.slingfin.com/img/products/800/1081_03.jpg',
        thumbnail: 'http://www.slingfin.com/img/products/800/1081_03.jpg'
      },
      {
        original: 'http://www.slingfin.com/img/products/800/1081_05.jpg',
        thumbnail: 'http://www.slingfin.com/img/products/800/1081_05.jpg'
      },
      {
        original: 'http://www.slingfin.com/img/products/800/1081_08.jpg',
        thumbnail: 'http://www.slingfin.com/img/products/800/1081_08.jpg'
      },
      {
        original: 'http://www.slingfin.com/img/products/800/1081_09.jpg',
        thumbnail: 'http://www.slingfin.com/img/products/800/1081_09.jpg'
      }
    ]

    return (
      <ImageGallery
      ref={i => this._imageGallery = i}
      items={images}
      slideInterval={2000}
      onImageLoad={this.handleImageLoad}/>
    );
  }

}

export default ImageCarousol;
