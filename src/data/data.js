
export default {
  webtrusses: [
    {
      id: 1,
      category: "WebTruss",
      name: "WebTruss",
      description: "SlingFin's patented WebTrussmakes this tent much strongeand easier topitch than traditional sleeve or cliptents.",
      price: '30.70',
      weight: '210.00',
      thumbnail:require('../images/line-drawings/WebTruss-only.jpg'),
      main:require('../images/line-drawings/WebTruss-only.jpg'),
      gallery1:"http://www.slingfin.com/img/products/800/1080_04.jpg",
      gallery2:"http://www.slingfin.com/img/products/800/1080_09.jpg",
      gallery3:"http://www.slingfin.com/img/products/800/1082_03.jpg",
      gallery4:"http://www.slingfin.com/img/products/800/1082_04.jpg",
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
      thumbnail:require('../images/footprints/tub-footprint-no-background.png'),
      main:require('../images/footprints/tub-footprint-no-background.png'),
      gallery1:require('../images/line-drawings/Tub-Footprint-only.jpg'),
      gallery2:require('../images/footprints/tub-footprint-no-background.png'),
      recommend: {
        id: 8,
        category: "InnerTentBodies",
        name: "Drop-in Mesh Body",
        description: ".....",
        price: '34.95',
        weight: '292.00',
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
      thumbnail:require('../images/footprints/flat-footprint.png'),
      main:require('../images/footprints/flat-footprint.png'),
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
      thumbnail:require('../images/line-drawings/RS-body-only.jpg'),
      main:require('../images/line-drawings/RS-body-only.jpg'),
      gallery1:"http://www.slingfin.com/img/products/800/1085_01a.jpg",
      gallery2:"http://www.slingfin.com/img/products/800/1085_02.jpg",
      gallery3:"http://www.slingfin.com/img/products/800/1085_02.jpg",
      gallery4:"http://www.slingfin.com/img/products/800/1085_02.jpg",
      recommend: null
    },
    {
      id: 7,
      category: "InnerTentBodies",
      name: "Mesh Body",
      description: ".....",
      price: '73.30',
      weight: '555.00',
      thumbnail:require('../images/line-drawings/Mesh-body-only.jpg'),
      main:require('../images/line-drawings/Mesh-body-only.jpg'),
      gallery1:"http://www.slingfin.com/img/products/800/1081_02.jpg",
      gallery2:"http://www.slingfin.com/img/products/800/1081_03.jpg",
      gallery3:"http://www.slingfin.com/img/products/800/1081_04.jpg",
      recommend: null
    },
    {
      id: 8,
      category: "InnerTentBodies",
      name: "Drop-in Mesh Body",
      description: ".....",
      price: '34.95',
      weight: '292.00',
      thumbnail:"http://www.slingfin.com/img/products/800/1086_01.jpg",
      main:"http://www.slingfin.com/img/products/800/1086_01.jpg",
      gallery1:"http://www.slingfin.com/img/products/1800/086_04.jpg",
      gallery2:"http://www.slingfin.com/img/products/1800/086_07.jpg",
      recommend: {
        id: 3,
        category: "FootPrint",
        name: "Tub Footprint",
        description: "SlingFin's patented TubFootprint actually keeps  water out --unlike flat tarps! Creates StormPacksystem when paired with fly, WebTrussand poles.",
        price: '34.90',
        weight: '245.00',
        thumbnail:require('../images/footprints/tub-footprint-no-background.png'),
        main:require('../images/footprints/tub-footprint-no-background.png')
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
      thumbnail: require('../images/poles/cross-poles.png'),
      main:require('../images/poles/cross-poles.png'),
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
      thumbnail:require('../images/poles/bow-pole.png'),
      main:require('../images/poles/bow-pole.png'),
      gallery1:require('../images/poles/bow-pole.png'),
      gallery2:require('../images/poles/bow-pole.png'),
      recommend: null
    },
    {
      id: 11,
      category: "Poles",
      name: "Your Own Trekking Poles",
      description: ".....",
      price: '0.00',
      weight:'0.00',
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
      thumbnail:require('../images/stakes/stakes.jpg'),
      main:require('../images/stakes/stakes.jpg'),
      gallery1:require('../images/stakes/stakes.jpg'),
      gallery2:require('../images/stakes/stakesrow.jpg'),
      recommend: null
    },
    {
      id: 13,
      category: "Accessories",
      name: "Stake (qty: 1)",
      description: ".....",
      price: '1.00',
      weight: '111111.00',
      thumbnail:require('../images/stakes/stakefront.jpg'),
      main:require('../images/stakes/stakefront.jpg'),
      gallery1:require('../images/stakes/stakeback.jpg'),
      gallery2:require('../images/stakes/stakesrow.jpg'),
      recommend: null
    }
  ]
}
