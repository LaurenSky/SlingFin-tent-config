import React from 'react';
import ImageGallery from 'react-image-gallery';
require('core-js/fn/object/entries');
// SCSS
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
// CSS
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";


class ImageCarousol extends React.Component {
  handleImageLoad(event) {
    // console.log('Image loaded ', event.target)
  }

  indexOf(array, partId) {
    let index = array.indexOf(partId);
    return index;
  }

  addIfIncludesAll(partIds, meshDropInPicsTrek, partsInCart, images) {
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
  }

  render() {
    this.indexOf.bind(this)
    let partsInCart = [];
    let props = this.props.partsInCart

    if ( (props !== false) || (Object.keys(props).length > 0) ) {
      Object.entries(props).forEach(
        ([key, value]) => {
          partsInCart.push(key)
        }
      );
    }

    let images = []
    const treeLineClearImage = require('../../images/tree-line.png')
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

      if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('3') && partsInCart.includes('8') && partsInCart.includes('12') ) {
        // MeshDropInTrek

        // let partIds = ['1', '9', '5', '11', '8', '12']
        let partIds = ['1', '9', '5', '11', '3', '8', '12'] //with tub footprint
        this.addIfIncludesAll(partIds, meshDropInPicsTrek, partsInCart, images)
        basePole = '11'

      }  else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('3') && partsInCart.includes('8') && partsInCart.includes('12') ) {
        // meshDropInBow)

        // let partIds = ['1', '9', '5', '10', '8', '12']
        let partIds = ['1', '9', '5', '10', '3', '8', '12'] //with tub footprint
        this.addIfIncludesAll(partIds, meshDropInPicsBow, partsInCart, images)
        basePole = '10'

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('3') && partsInCart.includes('12') ) {
        // StormpackTrek)

        let partIds = ['1', '9', '5', '11', '3', '12']
        this.addIfIncludesAll(partIds, stormpackPicsTrek, partsInCart, images)
        basePole = '11'

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('3') && partsInCart.includes('12') ) {
        // StormpackBow)

        let partIds = ['1', '9', '5', '10', '3', '12']
        this.addIfIncludesAll(partIds, stormpackPicsBow, partsInCart, images)
        basePole = '10'

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('7') && partsInCart.includes('12') ) {
        // MeshTrek

        let partIds = ['1', '9', '5', '11', '7', '12']
        this.addIfIncludesAll(partIds, meshPicsTrek, partsInCart, images)
        basePole = '11'

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('7') && partsInCart.includes('12') ) {
        // MeshBow)

        let partIds = ['1', '9', '5', '10', '7', '12']
        this.addIfIncludesAll(partIds, meshPicsBow, partsInCart, images)
        basePole = '10'

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('11') && partsInCart.includes('6') && partsInCart.includes('12') ) {
        // RipstopTrek)

        let partIds = ['1', '9', '5', '11', '6', '12']
        this.addIfIncludesAll(partIds, ripstopPicsTrek, partsInCart, images)
        basePole = '11'

      } else if ( partsInCart.includes('1') && partsInCart.includes('9') && partsInCart.includes('5') && partsInCart.includes('10') && partsInCart.includes('6') && partsInCart.includes('12') ) {
        // RipstopBow)

        let partIds = ['1', '9', '5', '10', '6', '12']
        this.addIfIncludesAll(partIds, ripstopPicsBow, partsInCart, images)
        basePole = '10'

      } else {
        images.push (
          {
            original: treeLineClearImage,
            thumbnail: treeLineClearImage
          }
        )
      }

      for (let i = 0; i < partsInCart.length; i++) {
        if ( Object.keys(accessoryPics).includes(partsInCart[i]) ) {
          let partId = partsInCart[i]
          if (basePole === '11') {
            let image = accessoryPics[partId]
            images.push(
              {
                original: image.trek,
                thumbnail: image.trek,
              }
            )
          } else if (basePole === '10') {
            let image = accessoryPics[partId]
            images.push(
              {
                original: image.bow,
                thumbnail: image.bow,
              }
            )
          }
        }
      }

    } else {
      images.push (
        {
          original: treeLineClearImage,
          thumbnail: treeLineClearImage
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
