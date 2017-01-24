import React from 'react';
import ImageGallery from 'react-image-gallery';
// SCSS
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
// CSS
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
// Webpack
// import "react-image-gallery/styles/css/image-gallery";


class ImageCarousol extends React.Component {
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {
    let partsInCart = [];

    Object.entries(this.props.partsInCart).forEach(
      ([key, value]) => {
        console.log("in iterate!!!!" , key, value.partInfo)
        partsInCart.push(key)
        console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- IMAGES :' , partsInCart)
      }
    );

    let images = []
    let imgConfigPics = this.props.tentConfigPics
    let meshPicsTrek = imgConfigPics.meshbody.trek
    let meshPicsBow = imgConfigPics.meshbody.bow
    let stormpackPicsTrek = imgConfigPics.stormpack.trek
    let stormpackPicsBow = imgConfigPics.stormpack.bow
    let ripstopPicsTrek = imgConfigPics.ripstop.trek
    let ripstopPicsBow = imgConfigPics.ripstop.bow


    if (partsInCart.length > 0) {
      if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('7') ) {
        // MeshTrek

        for (let i = 0 ; i < meshPicsTrek.length; i++) {
          images.push(
            {
              original: meshPicsTrek[i],
              thumbnail: meshPicsTrek[i]
            }
          )
        }
      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('7') ) {
        // MeshBow)

        for (let i = 0 ; i < meshPicsBow.length; i++) {
          images.push(
            {
              original: meshPicsBow[i],
              thumbnail: meshPicsBow[i]
            }
          )
        }
      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('6') ) {
        // RipstopTrek)

        for (let i = 0 ; i < ripstopPicsTrek.length; i++) {
          images.push(
            {
              original: ripstopPicsTrek[i],
              thumbnail: ripstopPicsTrek[i]
            }
          )
        }
      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('6') ) {
        // RipstopBow)

        for (let i = 0 ; i < ripstopPicsBow.length; i++) {
          images.push(
            {
              original: ripstopPicsBow[i],
              thumbnail: ripstopPicsBow[i]
            }
          )
        }
      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('3') ) {
        // StormpackTrek)

        for (let i = 0 ; i < stormpackPicsTrek.length; i++) {
          images.push(
            {
              original: stormpackPicsTrek[i],
              thumbnail: stormpackPicsTrek[i]
            }
          )
        }
      }  else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('3') ) {
        // StormpackBow)

        for (let i = 0 ; i < stormpackPicsBow.length; i++) {
          images.push(
            {
              original: stormpackPicsBow[i],
              thumbnail: stormpackPicsBow[i]
            }
          )
        }
      } else {
        images.push (
          {
            original: 'http://www.slingfin.com/img/promos/home-promo-2.jpg',
            thumbnail: 'http://www.slingfin.com/img/promos/home-promo-2.jpg'
          }
        )
      }
    } else {
      images.push (
        {
          original: 'http://www.slingfin.com/img/promos/home-promo-2.jpg',
          thumbnail: 'http://www.slingfin.com/img/promos/home-promo-2.jpg'
        // originalClass: 'featured-slide',
        // thumbnailClass: 'featured-thumb',
        // originalAlt: 'original-alt',
        // thumbnailAlt: 'thumbnail-alt',
        // // thumbnailLabel: 'Optional',
        // description: 'Optional description...',
        // // srcSet: 'Optional srcset (responsive images src)',
        // sizes: 'Optional sizes (image sizes relative to thebreakpoint)'
        }
      )
    }


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
