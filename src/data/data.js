
export default {
  webtrusses: [
    {
      id: 1,
      category: "WebTruss",
      name: "WebTruss",
      description: "SlingFin's patented WebTrussmakes this tent much strongeand easier topitch than traditional sleeve or cliptents.",
      price: '30.70',
      weight: '210.00',
      lineDrawing:require('../images/line-drawings/WebTruss-only.png'),
      thumbnail:"http://www.slingfin.com/img/products/800/1080_04.jpg",
      main:"http://www.slingfin.com/img/products/800/1080_04.jpg",
      gallery1:"http://www.slingfin.com/img/products/800/1080_09.jpg",
      gallery2:"http://www.slingfin.com/img/products/800/1082_03.jpg",
      recommend: null
    }
  ],

  footprints: [
    {
      id: 3,
      category: "FootPrint",
      name: "Tub Footprint",
      description: "SlingFin's patented TubFootprint actually keeps  water out --unlike flat tarps! Creates StormPacksystem when paired with fly, WebTruss andpoles.",
      price: '34.90',
      weight: '245.00',
      lineDrawing:require('../images/line-drawings/sized-images/Tub-Footprint-only.png'),
      thumbnail:require('../images/line-drawings/Tub-Footprint-only.png'),
      main:require('../images/line-drawings/Tub-Footprint-only.png'),
      gallery1:require('../images/line-drawings/Tub-Footprint-only.jpg'),
      gallery2:require('../images/line-drawings/Tub-Footprint-only.jpg'),
      recommend: {
        id: 8,
        category: "InnerTentBodies",
        name: "Drop-in Mesh Body",
        description: ".....",
        price: '34.95',
        weight: '292.00',
        lineDrawing:require('../images/line-drawings/MeshDropIn.png'),
        thumbnail:"http://www.slingfin.com/img/products/800/1086_01.jpg",
        main:"http://www.slingfin.com/img/products/800/1086_01.jpg"
      }
    },
    {
      id: 4,
      category: "FootPrint",
      name: "Flat Footprint",
      description: "Can be used in conjunction with tent body to provide additional ground protection.",
      price: '60.00',
      weight: '161.59',
      lineDrawing:require('../images/line-drawings/sized-images/Flat-Footprint-only.png'),
      thumbnail:require('../images/line-drawings/Flat-Footprint-only.png'),
      main:require('../images/line-drawings/Flat-Footprint-only.png'),
      gallery1:"http://www.slingfin.com/img/products/1800/083_02.jpg",
      gallery2:require('../images/line-drawings/Flat-Footprint-only.jpg'),
      recommend: null
    }
  ],
  flysheets: [
    {
      id: 5,
      category: "Flysheet",
      name: "Gray Flysheet",
      description: "This flysheet will keep youdry in rain and snow. (Standard Version.Made of 15D Nylon RipStop, Sil/PU 1200mmFR.)",
      price: '72.25',
      weight: '567.00',
      lineDrawing:require('../images/line-drawings/flysheet.png'),
      thumbnail:"http://www.slingfin.com/img/products/800/1081_08.jpg",
      main:"http://www.slingfin.com/img/products/800/1082_06.jpg",
      gallery1:"http://www.slingfin.com/img/products/1800/081_08.jpg",
      gallery2:"http://www.slingfin.com/img/products/1800/081_08.jpg",
      recommend: null
    }
  ],

  innerTentBodies: [
    {
      id: 6,
      category: "InnerTentBodies",
      name: "Full RipStop Body",
      description: ".....",
      price: '98.65',
      weight: '679.00',
      lineDrawing:require('../images/line-drawings/RS-body-only.jpg'),
      thumbnail:'http://www.slingfin.com/img/products/800/1082_02.jpg',
      main:"http://www.slingfin.com/img/products/800/1082_02.jpg",
      gallery1:"http://www.slingfin.com/img/products/800/1082_09.jpg",
      gallery2:"http://www.slingfin.com/img/products/800/1085_01a.jpg",
      recommend: null
    },
    {
      id: 7,
      category: "InnerTentBodies",
      name: "Mesh Body",
      description: ".....",
      price: '73.30',
      weight: '555.00',
      lineDrawing:require('../images/line-drawings/sized-images/Mesh-body-only.png'),
      thumbnail:"http://www.slingfin.com/img/products/800/1081_02.jpg",
      main:"http://www.slingfin.com/img/products/800/1081_02.jpg",
      gallery1:"http://www.slingfin.com/img/products/800/1081_03.jpg",
      gallery2:"http://www.slingfin.com/img/products/800/1081_04.jpg",
      recommend: null
    },
    {
      id: 8,
      category: "InnerTentBodies",
      name: "Drop-in Mesh Body",
      description: ".....",
      price: '34.95',
      weight: '292.00',
      lineDrawing:require('../images/line-drawings/MeshDropIn.png'),
      thumbnail:'http://www.slingfin.com/img/products/800/1086_01.jpg',
      main:"http://www.slingfin.com/img/products/800/1086_01.jpg",
      gallery1:'http://www.slingfin.com/img/products/800/1081_02.jpg',
      gallery2:'http://www.slingfin.com/img/products/800/1081_04.jpg',
      recommend: {
        id: 3,
        category: "FootPrint",
        name: "Tub Footprint",
        description: "SlingFin's patented TubFootprint actually keeps  water out --unlike flat tarps! Creates StormPacksystem when paired with fly, WebTrussand poles.",
        price: '34.90',
        weight: '245.00',
        lineDrawing:require('../images/line-drawings/Tub-Footprint-only.png'),
        thumbnail:require('../images/line-drawings/Tub-Footprint-only.png'),
        main:require('../images/line-drawings/Tub-Footprint-only.png')
      }
    }
  ],

  poles: [
    {
      id: 9,
      category: "Poles",
      name: "Cross Poles",
      description: ".....",
      price: '22.46',
      weight: '404.00',
      lineDrawing:require('../images/line-drawings/cross-poles.png'),
      thumbnail: require('../images/line-drawings/cross-poles.png'),
      main:require('../images/line-drawings/cross-poles.png'),
      gallery1:"http://images.indianexpress.com/2015/10/mnkey-759.jpg",
      gallery2:"http://images.indianexpress.com/2015/10/mnkey-759.jpg",
      recommend: null
    },
    {
      id: 10,
      category: "Poles",
      name: "Bow Pole",
      description: ".....",
      price: '6.00',
      weight: '113.40',
      lineDrawing:require('../images/line-drawings/bow-pole.png'),
      thumbnail:require('../images/line-drawings/bow-pole.png'),
      main:require('../images/line-drawings/bow-pole.png'),
      gallery1:require('../images/line-drawings/bow-pole.png'),
      gallery2:require('../images/line-drawings/bow-pole.png'),
      recommend: null
    },
    {
      id: 11,
      category: "Poles",
      name: "Your Own Trekking Poles",
      description: ".....",
      price: '0.00',
      weight:'0.00',
      lineDrawing:require('../images/poles/trekking-poles.png'),
      thumbnail:require('../images/poles/trekking-poles.png'),
      main:require('../images/poles/trekking-poles.png'),
      gallery1:'http://www.slingfin.com/img/products/800/1082_04.jpg',
      gallery2: '',
      recommend: null
    }
  ],

  accessories: [
    {
      id: 12,
      category: "Accessories",
      name: "Stakes (qty 6)",
      description: ".....",
      price: '7.25',
      weight: '111111.00',
      lineDrawing:require('../images/stakes/stakes.jpg'),
      thumbnail:require('../images/stakes/stakes.jpg'),
      main:require('../images/stakes/stakes.jpg'),
      gallery1:require('../images/stakes/stakes.jpg'),
      gallery2:require('../images/stakes/stakesrow.jpg'),
      recommend: null
    }
    // {
    //   id: 13,
    //   category: "Accessories",
    //   name: "Stake (qty: 1)",
    //   description: ".....",
    //   price: '1.00',
    //   weight: '111111.00',
    //   lineDrawing:require('../images/stakes/stakefront.jpg'),
    //   thumbnail:require('../images/stakes/stakefront.jpg'),
    //   main:require('../images/stakes/stakefront.jpg'),
    //   gallery1:require('../images/stakes/stakeback.jpg'),
    //   gallery2:require('../images/stakes/stakesrow.jpg'),
    //   recommend: null
    // }
  ]
}
