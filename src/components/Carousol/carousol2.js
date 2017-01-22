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
        partsInCart.push(value.partInfo)
        console.log('<<<<>>>>>>>>> MY PARTs ARRAY ---- IMAGES :' , partsInCart)
      }
    );

    let images = []

    if (partsInCart.length > 0) {
      console.log('<<<<>>>>>>>>> IN CAROUSOL ---- TOTAL-CAROUSOL :' , images)
      images.push(
        {
          original: partsInCart[0].main,
          // original: 'http://lorempixel.com/1000/600/nature/1/',
          thumbnail: partsInCart[0].thumbnail,
          originalClass: 'featured-slide',
          thumbnailClass: 'featured-thumb',
          originalAlt: 'original-alt',
          thumbnailAlt: 'thumbnail-alt',
          // thumbnailLabel: 'Optional',
          description: 'Optional description...',
          // srcSet: 'Optional srcset (responsive images src)',
          sizes: 'Optional sizes (image sizes relative to thebreakpoint)'
        }
      )

      for (let i = 1 ; i < partsInCart.length; i++) {
        images.push(
          {
            original: partsInCart[i].main,
            thumbnail: partsInCart[i].thumbnail
          },
          {
            original: partsInCart[i].gallery1,
            thumbnail: partsInCart[i].gallery2
          }
          // {
          //   original: partsInCart[i].gallery3,
          //   thumbnail: partsInCart[i].gallery4
          // }
        )
      }
    } else {
      images = [
        { original: 'http://www.slingfin.com/img/products/800/1081_02.jpg',
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
          original: 'http://www.slingfin.com/img/products/800/1081_04.jpg',
          thumbnail: 'http://www.slingfin.com/img/products/800/1081_04.jpg'
        }
      ]
    }

    // if (!partsInCart.length == 0) {
    //   images = [
    //     {
    //       original: partsInCart[0].main,
    //       // original: 'http://lorempixel.com/1000/600/nature/1/',
    //       thumbnail: 'http://www.slingfin.com/img/products/800/1081_02.jpg',
    //       originalClass: 'featured-slide',
    //       thumbnailClass: 'featured-thumb',
    //       originalAlt: 'original-alt',
    //       thumbnailAlt: 'thumbnail-alt',
    //       // thumbnailLabel: 'Optional',
    //       description: 'Optional description...',
    //       // srcSet: 'Optional srcset (responsive images src)',
    //       sizes: 'Optional sizes (image sizes relative to thebreakpoint)'
    //     },
        // {
        //   original: 'http://www.slingfin.com/img/products/800/1081_01.jpg',
        //   thumbnail: 'http://www.slingfin.com/img/products/800/1081_01.jpg'
        // },
    //     {
    //       original: 'http://www.slingfin.com/img/products/800/1081_03.jpg',
    //       thumbnail: 'http://www.slingfin.com/img/products/800/1081_03.jpg'
    //     },
    //     {
    //       original: 'http://www.slingfin.com/img/products/800/1081_05.jpg',
    //       thumbnail: 'http://www.slingfin.com/img/products/800/1081_05.jpg'
    //     },
    //     {
    //       original: 'http://www.slingfin.com/img/products/800/1081_08.jpg',
    //       thumbnail: 'http://www.slingfin.com/img/products/800/1081_08.jpg'
    //     },
    //     {
    //       original: 'http://www.slingfin.com/img/products/800/1081_09.jpg',
    //       thumbnail: 'http://www.slingfin.com/img/products/800/1081_09.jpg'
    //     }
    //   ]
    // } else {
    //   images = [
    //     { original: 'http://kids.nationalgeographic.com/content/dam/kids/My%20Shot%20Promos/MyShot-Monkey.adapt.470.1.jpg',
    //     // original: 'http://lorempixel.com/1000/600/nature/1/',
    //     thumbnail: 'http://www.slingfin.com/img/products/800/1081_02.jpg',
    //     originalClass: 'featured-slide',
    //     thumbnailClass: 'featured-thumb',
    //     originalAlt: 'original-alt',
    //     thumbnailAlt: 'thumbnail-alt',
    //     // thumbnailLabel: 'Optional',
    //     description: 'Optional description...',
    //     // srcSet: 'Optional srcset (responsive images src)',
    //     sizes: 'Optional sizes (image sizes relative to thebreakpoint)'
    //     },
    //     {
    //       original: 'http://www.slingfin.com/img/products/800/1081_01.jpg',
    //       thumbnail: 'http://www.slingfin.com/img/products/800/1081_01.jpg'
    //     }
    //   ]
    // }



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
