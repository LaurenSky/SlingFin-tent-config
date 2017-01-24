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
    let meshPics = imgConfigPics.meshbody
    if (partsInCart.length > 0) {
      console.log('<<<<>>>>>>>>> IN CAROUSOL ---- TOTAL-CAROUSOL :' , images)
      images.push(
        {
          original: meshPics.main,
          // original: 'http://lorempixel.com/1000/600/nature/1/',
          thumbnail: meshPics.main,
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

      // for (let i = 1 ; i < partsInCart.length; i++) {
        images.push(
          {
            original: meshPics.gallery1,
            thumbnail: meshPics.gallery1
          },
          {
            original: meshPics.gallery2,
            thumbnail: meshPics.gallery2
          },
          {
            original: meshPics.gallery3,
            thumbnail: meshPics.gallery3
          },
          {
            original: meshPics.gallery4,
            thumbnail: meshPics.gallery4
          },
          {
            original: meshPics.gallery5,
            thumbnail: meshPics.gallery5
          },
          {
            original: meshPics.gallery6,
            thumbnail: meshPics.gallery6
          },
          {
            original: meshPics.gallery7,
            thumbnail: meshPics.gallery7
          },
          {
            original: meshPics.gallery8,
            thumbnail: meshPics.gallery8
          },
          {
            original: meshPics.gallery9,
            thumbnail: meshPics.gallery9
          }
        )
      // }
    } else {
      images = [
        { original: 'http://www.slingfin.com/img/promos/home-promo-2.jpg',
        // original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://www.slingfin.com/img/promos/home-promo-2.jpg',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        originalAlt: 'original-alt',
        thumbnailAlt: 'thumbnail-alt',
        // thumbnailLabel: 'Optional',
        description: 'Optional description...',
        // srcSet: 'Optional srcset (responsive images src)',
        sizes: 'Optional sizes (image sizes relative to thebreakpoint)'
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
