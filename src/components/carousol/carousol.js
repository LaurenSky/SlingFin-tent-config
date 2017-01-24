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
    let props = this.props.partsInCart

    if (props !== false) {
      Object.entries(props).forEach(
        ([key, value]) => {
          console.log("in iterate!!!!" , key, value.partInfo)
          partsInCart.push(key)
          console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- IMAGES :' , partsInCart)
        }
      );
    }

    let images = []
    const imgConfigPics = this.props.tentConfigPics
    const meshPicsTrek = imgConfigPics.meshbody.trek
    const meshPicsBow = imgConfigPics.meshbody.bow
    const stormpackPicsTrek = imgConfigPics.stormpack.trek
    const stormpackPicsBow = imgConfigPics.stormpack.bow
    const ripstopPicsTrek = imgConfigPics.ripstop.trek
    const ripstopPicsBow = imgConfigPics.ripstop.bow
    const meshDropInPicsTrek = imgConfigPics.meshDropIn.trek
    const meshDropInPicsBow = imgConfigPics.meshDropIn.bow


    if (partsInCart.length > 0) {

      if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('7') && partsInCart.includes('12') ) {
        // MeshTrek

        for (let i = 0 ; i < meshPicsTrek.length; i++) {
          images.push(
            {
              original: meshPicsTrek[i],
              thumbnail: meshPicsTrek[i]
            }
          )
        }
      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('7') && partsInCart.includes('12') ) {
        // MeshBow)

        for (let i = 0 ; i < meshPicsBow.length; i++) {
          images.push(
            {
              original: meshPicsBow[i],
              thumbnail: meshPicsBow[i]
            }
          )
        }
      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('6') && partsInCart.includes('12') ) {
        // RipstopTrek)

        for (let i = 0 ; i < ripstopPicsTrek.length; i++) {
          images.push(
            {
              original: ripstopPicsTrek[i],
              thumbnail: ripstopPicsTrek[i]
            }
          )
        }
      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('6') && partsInCart.includes('12') ) {
        // RipstopBow)

        for (let i = 0 ; i < ripstopPicsBow.length; i++) {
          images.push(
            {
              original: ripstopPicsBow[i],
              thumbnail: ripstopPicsBow[i]
            }
          )
        }
      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('3') && partsInCart.includes('8') && partsInCart.includes('12') ) {
        // MeshDropInTrek)

        for (let i = 0 ; i < meshDropInPicsTrek.length; i++) {
          images.push(
            {
              original: meshDropInPicsTrek[i],
              thumbnail: meshDropInPicsTrek[i]
            }
          )
        }
      }  else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('3') && partsInCart.includes('8') && partsInCart.includes('12') ) {
        // meshDropInBow)

        for (let i = 0 ; i < meshDropInPicsBow.length; i++) {
          images.push(
            {
              original: meshDropInPicsBow[i],
              thumbnail: meshDropInPicsBow[i]
            }
          )
        }
      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('3') && partsInCart.includes('12') ) {
        // StormpackTrek)

        for (let i = 0 ; i < stormpackPicsTrek.length; i++) {
          images.push(
            {
              original: stormpackPicsTrek[i],
              thumbnail: stormpackPicsTrek[i]
            }
          )
        }
      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('3') && partsInCart.includes('12') ) {
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
