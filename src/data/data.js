
export default {
  webtrusses: [
    {
      id: 1,
      category: "WebTruss",
      name: "WebTruss",
      description: "Essential to your configuration. SlingFin's patented WebTruss makes this tent much stronger and easier to pitch than traditional sleeve or clip tents. It can be set up using a top bow pole, vertical strut poles, or trekking poles and provides tremendous strength and stability for minimal weight.",
      price: '30.70',
      weight: '210.00',
      lineDrawing:require('../images/line-drawings/WebTruss-only.png'),
      thumbnail:require('../images/line-drawings/expand-images/WebTruss-only.png'),
      recommend: null
    }
  ],

  footprints: [
    {
      id: 3,
      category: "FootPrint",
      name: "Tub Footprint",
      description: "SlingFin's patented TubFootprint actually keeps  water out --unlike flat tarps! Creates the StormPack System (the lightweight, fastpack configuration) when paired with fly, WebTruss and poles.",
      price: '34.90',
      weight: '245.00',
      lineDrawing:require('../images/line-drawings/Tub-Footprint-only.png'),
      thumbnail:require('../images/line-drawings/expand-images/Tub-Footprint-only.png'),
      recommend: null
    },
    {
      id: 4,
      category: "FootPrint",
      name: "Flat Footprint",
      description: "Can be used in conjunction with a tent body to provide additional ground protection and prolong the life of your tent.",
      price: '60.00',
      weight: '161.59',
      lineDrawing:require('../images/line-drawings/Flat-Footprint-only.png'),
      thumbnail:require('../images/line-drawings/expand-images/Flat-Footprint-only.png'),
      recommend: null
    }
  ],
  flysheets: [
    {
      id: 5,
      category: "Flysheet",
      name: "Gray Flysheet",
      description: "Essential to your configuration. This flysheet (Made of 15D Nylon RipStop and Sil/PU 1200mmFR) will keep you dry in both rain and snow.",
      price: '72.25',
      weight: '567.00',
      lineDrawing:require('../images/line-drawings/flysheet.png'),
      thumbnail:require('../images/line-drawings/expand-images/flysheet.png'),
      recommend: null
    }
  ],

  innerTentBodies: [
    {
      id: 6,
      category: "InnerTentBodies",
      name: "Full RipStop Body",
      description: "This is the 4-season full Ripstop (R/S) inner tent body. It was designed to create an extremely lightweight, yet solid, 4-season tent configuration.",
      price: '98.65',
      weight: '679.00',
      lineDrawing:require('../images/line-drawings/RS-body-only.png'),
      thumbnail:require('../images/line-drawings/expand-images/RS-body-only.png'),
      recommend: null
    },
    {
      id: 7,
      category: "InnerTentBodies",
      name: "Mesh Body",
      description: "This is the 3-season Mesh tent body. It was designed with the backpacking configuration in mind and will protect you from mosquitos, while providing excellent air circulation.",
      price: '73.30',
      weight: '555.00',
      lineDrawing:require('../images/line-drawings/Mesh-body-only.png'),
      thumbnail:require('../images/line-drawings/expand-images/Mesh-body-only.png'),
      recommend: null
    },
    {
      id: 8,
      category: "InnerTentBodies",
      name: "Drop-in Mesh Body",
      description: "Mesh drop-in was designed to be used with the Tub Footprint. Made of 15D No-See-Um Mesh, it provides bug protection without the weight of a a traditional tent body. Just lift up the mesh and crawl in (quick and easy access via a shock cord system). Or, if you prefer zippers, one side also has a zippered entrance. ** THIS NEEDS A TUB FOOTPRINT TO BE FUNCTIONAL.",
      price: '34.95',
      weight: '292.00',
      lineDrawing:require('../images/line-drawings/MeshDropIn.png'),
      thumbnail:require('../images/line-drawings/expand-images/MeshDropIn.png'),
      recommend: {
        id: 3,
        category: "FootPrint",
        name: "Tub Footprint",
        description: "SlingFin's patented TubFootprint actually keeps  water out --unlike flat tarps! Creates the StormPack System (the lightweight, fastpack configuration) when paired with fly, WebTruss and poles.",
        price: '34.90',
        weight: '245.00',
        lineDrawing:require('../images/line-drawings/Tub-Footprint-only.png'),
        thumbnail:require('../images/line-drawings/expand-images/Tub-Footprint-only.png'),
      }
    }
  ],

  poles: [
    {
      id: 9,
      category: "Poles",
      name: "Cross Poles",
      description: "Essential to your configuration. These 2 9mm DAC NSL Cross Poles are designed to fit perfectly in the webtruss to provide your tent the strength and shape to keep you protected and comfortable in a myriad of environments.",
      price: '22.46',
      weight: '404.00',
      lineDrawing:require('../images/line-drawings/cross-poles.png'),
      thumbnail: require('../images/line-drawings/expand-images/cross-poles.png'),
      recommend: null
    },
    {
      id: 10,
      category: "Poles",
      name: "Bow Pole",
      description: "This single 9.6mm DAC NSL Bow Pole can be used with the cross-poles to complete the sturcture of your tent. ( We recommend to buy this if weight isn't your main concern or if you don't use trekking poles when you hike. )",
      price: '6.00',
      weight: '113.40',
      lineDrawing:require('../images/line-drawings/bow-pole.png'),
      thumbnail:require('../images/line-drawings/expand-images/bow-pole.png'),
      recommend: null
    },
    {
      id: 11,
      category: "Poles",
      name: "Your Own Trekking Poles",
      description: "Do you use trekking poles already when you backpack? Save some weight and money and use 2 of them instead of the above bow-pole to complete the structure of your tent. ( We do not provide these. )",
      price: '0.00',
      weight:'0.00',
      lineDrawing:require('../images/line-drawings/trekking-poles.png'),
      thumbnail:require('../images/line-drawings/expand-images/trekking-poles.png'),
      recommend: null
    }
  ],

  accessories: [
    {
      id: 12,
      category: "Accessories",
      name: "Stakes (qty 6)",
      description: "You need 6 of these to stake out your fly in wet conditions.",
      price: '7.25',
      weight: '0.00',
      lineDrawing:require('../images/line-drawings/stakes.png'),
      thumbnail:require('../images/line-drawings/expand-images/stakes.png'),
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
    //   recommend: null
    // }
  ]
}
