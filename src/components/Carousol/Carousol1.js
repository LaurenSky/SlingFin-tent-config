import React from 'react';
import ImageGallery from 'react-image-gallery';
require('core-js/fn/object/entries');
// SCSS
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
// CSS
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
// Webpack
// import "react-image-gallery/styles/css/image-gallery";


class ImageCarousol extends React.Component {

  handleImageLoad(event) {
    // console.log('Image loaded ', event.target)
  }

  indexOf(array, partId) {
    let index = array.indexOf(partId);
    return index;
  }

  render() {
    this.indexOf.bind(this)
    let partsInCart = [];
    let props = this.props.partsInCart
    console.log('=========== I just wanna fly === ')
    console.log('=========== CArosol props === ', props)

    if ( (props !== false) || (Object.keys(props).length > 0) ) {
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
    const accessoryPics = imgConfigPics.accessories
    const meshPicsTrek = imgConfigPics.meshbody.trek
    const meshPicsBow = imgConfigPics.meshbody.bow
    const stormpackPicsTrek = imgConfigPics.stormpack.trek
    const stormpackPicsBow = imgConfigPics.stormpack.bow
    const ripstopPicsTrek = imgConfigPics.ripstop.trek
    const ripstopPicsBow = imgConfigPics.ripstop.bow
    const meshDropInPicsTrek = imgConfigPics.meshDropIn.trek
    const meshDropInPicsBow = imgConfigPics.meshDropIn.bow
    let basePole

    if (partsInCart.length > 0) {

      if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('3') && partsInCart.includes('12') ) {
        // StormpackTrek)

        let partIds = ['1', '9', '5', '11', '3', '12']
        console.log('~~~~~~ part Ids Array: B4', partsInCart )

        for (let i = 0 ; i < stormpackPicsTrek.length; i++) {
          images.push(
            {
              original: stormpackPicsTrek[i],
              thumbnail: stormpackPicsTrek[i]
            }
          )
        }

        for (let i=0; i < partIds.length; i++) {
          let index = this.indexOf(partsInCart, partIds[i])
          if (index > -1) {
             partsInCart.splice(index, 1);
          }
        }

        basePole = '11'
        console.log('~~~~~~ part Ids Array: AFTER', partsInCart )


      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('3') && partsInCart.includes('12') ) {
        // StormpackBow)

        let partIds = ['1', '9', '5', '10', '3', '12']
        console.log('~~~~~~ part Ids Array: B4', partsInCart )

        for (let i = 0 ; i < stormpackPicsBow.length; i++) {
          images.push(
            {
              original: stormpackPicsBow[i],
              thumbnail: stormpackPicsBow[i]
            }
          )
        }

        for (let i=0; i < partIds.length; i++) {
          let index = this.indexOf(partsInCart, partIds[i])
          if (index > -1) {
             partsInCart.splice(index, 1);
          }
        }

        basePole = '10'
        console.log('~~~~~~ part Ids Array: AFTER', partsInCart )


      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('3') && partsInCart.includes('8') && partsInCart.includes('12') ) {
        // MeshDropInTrek)

        let partIds = ['1', '9', '5', '11', '3', '8', '12']
        console.log('~~~~~~ part Ids Array: B4', partsInCart )

        for (let i = 0 ; i < meshDropInPicsTrek.length; i++) {
          images.push(
            {
              original: meshDropInPicsTrek[i],
              thumbnail: meshDropInPicsTrek[i]
            }
          )
        }

        for (let i=0; i < partIds.length; i++) {
          let index = this.indexOf(partsInCart, partIds[i])
          if (index > -1) {
             partsInCart.splice(index, 1);
          }
        }

        basePole = '11'
        console.log('~~~~~~ part Ids Array: AFTER', partsInCart )


      }  else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('3') && partsInCart.includes('8') && partsInCart.includes('12') ) {
        // meshDropInBow)

        let partIds = ['1', '9', '5', '10', '3', '8', '12']
        console.log('~~~~~~ part Ids Array: B4', partsInCart )

        for (let i = 0 ; i < meshDropInPicsBow.length; i++) {
          images.push(
            {
              original: meshDropInPicsBow[i],
              thumbnail: meshDropInPicsBow[i]
            }
          )
        }

        for (let i=0; i < partIds.length; i++) {
          let index = this.indexOf(partsInCart, partIds[i])
          if (index > -1) {
             partsInCart.splice(index, 1);
          }
        }

        basePole = '10'
        console.log('~~~~~~ part Ids Array: AFTER', partsInCart )


      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('7') && partsInCart.includes('12') ) {
        // MeshTrek
        let partIds = ['1', '9', '5', '11', '7', '12']
        console.log('~~~~~~ part Ids Array: B4', partsInCart )

        for (let i = 0 ; i < meshPicsTrek.length; i++) {
          images.push(
            {
              original: meshPicsTrek[i],
              thumbnail: meshPicsTrek[i]
            }
          )
        }

        for (let i=0; i < partIds.length; i++) {
          let index = this.indexOf(partsInCart, partIds[i])
          if (index > -1) {
             partsInCart.splice(index, 1);
          }
        }
        basePole = '11'
        console.log('~~~~~~ part Ids Array: AFTER', partsInCart )


      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('7') && partsInCart.includes('12') ) {
        // MeshBow)
        let partIds = ['1', '9', '5', '10', '7', '12']
        console.log('~~~~~~ part Ids Array: B4', partsInCart )

        for (let i = 0 ; i < meshPicsBow.length; i++) {
          images.push(
            {
              original: meshPicsBow[i],
              thumbnail: meshPicsBow[i]
            }
          )
        }

        for (let i=0; i < partIds.length; i++) {
          let index = this.indexOf(partsInCart, partIds[i])
          if (index > -1) {
             partsInCart.splice(index, 1);
          }
        }

        basePole = '10'
        console.log('~~~~~~ part Ids Array: AFTER', partsInCart )

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('6') && partsInCart.includes('12') ) {
        // RipstopTrek)

        let partIds = ['1', '9', '5', '11', '6', '12']
        console.log('~~~~~~ part Ids Array: B4', partsInCart )

        for (let i = 0 ; i < ripstopPicsTrek.length; i++) {
          images.push(
            {
              original: ripstopPicsTrek[i],
              thumbnail: ripstopPicsTrek[i]
            }
          )
        }

        for (let i=0; i < partIds.length; i++) {
          let index = this.indexOf(partsInCart, partIds[i])
          if (index > -1) {
             partsInCart.splice(index, 1);
          }
        }

        basePole = '11'
        console.log('~~~~~~ part Ids Array: AFTER', partsInCart )


      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('6') && partsInCart.includes('12') ) {
        // RipstopBow)

        let partIds = ['1', '9', '5', '10', '6', '12']
        console.log('~~~~~~ part Ids Array: B4', partsInCart )

        for (let i = 0 ; i < ripstopPicsBow.length; i++) {
          images.push(
            {
              original: ripstopPicsBow[i],
              thumbnail: ripstopPicsBow[i]
            }
          )
        }

        for (let i=0; i < partIds.length; i++) {
          let index = this.indexOf(partsInCart, partIds[i])
          if (index > -1) {
             partsInCart.splice(index, 1);
          }
        }

        basePole = '10'
        console.log('~~~~~~ part Ids Array: AFTER', partsInCart )


      } else {
        images.push (
          {
            original: 'http://www.slingfin.com/img/promos/home-promo-2.jpg',
            thumbnail: 'http://www.slingfin.com/img/promos/home-promo-2.jpg'
          }
        )
      }

      console.log('~~~~~~ basePole: accessories', basePole )
      console.log('~~~~~~ part Ids Array: accessories', partsInCart )
      console.log('~~~~~~ part Ids Array: accessoriesPics', accessoryPics['3'] )


      for (let i = 0; i < partsInCart.length; i++) {
        if ( Object.keys(accessoryPics).includes(partsInCart[i]) ) {
          let partId = partsInCart[i]
          console.log('~~~~~~ part Ids Array: accessories ID', partId )
          if (basePole === '11') {
            let image = accessoryPics[partId]
            console.log('~~~~~~ part Ids Array: accessories image', image )
            images.push(
              {
                original: image.trek,
                thumbnail: image.trek,
                // description: 'Optional SetUp with accessory selected'
              }
            )
          } else if (basePole === '10') {
            let image = accessoryPics[partId]
            console.log('~~~~~~ part Ids Array: accessories image', image )
            images.push(
              {
                original: image.bow,
                thumbnail: image.bow,
                // description: 'Optional SetUp with accessory selected'

              }
            )
          }
        }
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
