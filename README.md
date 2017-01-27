### Problem Statement
 - SlinFin has a configurable tent system that can be adapted to fit various outdoor conditions and uses. Currently the system is only sold in 3 options online, meaning the configurability of the system, one of its main selling points, is not fully captured. This is due to the fact that there is no interactive, dynamic and easy-to-use way for a user to pick-and-choose the parts that they need to create the optimum system for their desired uses. This tool would address this problem.

#### Primary Goal
 - To provide customers that want to customize their tent system purchase a place where they can design the one that works for them and dynamically see how adding and removing components directly affects their main concerns, such as weight, cost, and environmental conditions.


### User Personas
 - #### Target User Group(s):
  - 1st Time Buyer, so not familiar with system and doesn’t own anything at home
  - Outdoor enthusiast
  - Loves Gear
  - Interested in the details and experience of the system and purchase

 - #### Key characteristics:
  - The user has already opted out of purchasing one of the 3 set options and wants to configure their own tent system
  - The user doesn’t mind spending ~20 min playing with the tool to design their ideal system
  - The user will most likely will be utilizing an electronic device that is a tablet size or larger to do this as they will be spending a high dollar amount on this purchase.


 - #### How do those characteristics factor into project/app/idea?
  - Design for ease of use and with a user in mind that wants to gear nerd out on different configurations.
  - Since this is most likely a technical and/or outdoor experienced user, they want to see all of the details of their configuration including weight, strength, comfortability, environment image gallery, etc.
  - This is all a part of the experience, which could encourage the user to purchase and buy into this tent system or be frustrated and leave. The tool should emulate how easy it is to switch between items and find what is best suited for their lives.
  - ###### Challenges: What is the most important thing to communicate?
      - We have different panels that feature such things as weights, ratings, uses, warnings, etc. The challenge will be to highlight the critical points and then point to supporting panels.
      - Think in terms of the ‘user story’. I’m at our site. I’m trying to make a decision. What information is the most critical? How do we highlight it and then move the story forward?


### Market Research
1. ###### Application’s competition (competing apps and/or non-app solutions):
    - There’s currently no competition for a tent like this on the market, so below are examples of other consumer products that use
2. ###### Other Product Customizer tools:
    1. http://www.velocityrigs.com/design/
        2. Pros:
            1. clear steps
            2. Product zoom is nice
        1. Cons:
            1. Slow initial loading
            2. design is not that great looking
            3. Doesn’t connect to cart for purchase
    2. http://urbike.de/produkt/singlespeed/
        1. Pros:
            1. clean look and feel
        2. Cons:
            1. Not extremely clear to me because in a different language
    3. https://lunasandals.com/products/sandalbuilder
        1. Pros:
            1. I like how you can click on the image to get what area to customize
        2. Cons:
            1. Long load time
    4. http://www.suunto.com/en-US/Customize-your-sports-watch/
        1. Pros:
            1. Design matches company image
            2. Clear what part of the watch each area is for
            3. I like how you can click on the image to get what area to customize
            4. Easy to follow flow on top for each part of design, customize, review process
        2. Cons:
            1. Font small and hard to read on background
     5. http://www.newbalance.com/pd/nb1-574/US574-BLANK.html?ICID=NB1WOOL574_NAV_CM_5892#US574/BXB01A21C03,BXB02A21C03,BXB05A02C03,BXB06A02C03,BXB07A02C04,BXB08A02C03,BXB09A02C03,BXB10A02C10,BXB11A02C04,BXB03A21C03,BXB12A19C04,BXB15A05C04,BXB04A03B58,BXB14A08B58,BXB16A07C16,LXB13A08A23,RXB13A08A23/g:undefined/s:undefined/w:undefined/q:1
        1. Pros:
            1. I like how you can click on the image to get what area to customize
            2. 360 degree view
        2. Cons:
            1. A bit confusing
            2. Too many options without separation or organization
      3. https://www.undandy.com/en/customize/product/421
         1. Pros:
            1. I like how you can click on the image to get what area to customize
         2. Cons:
            1. Really slow and kind of glitchy

3. ###### research from users on why these alternatives do not effectively address the problem.
    - n/a
4. ###### differentiation: what makes your idea/product different
    - There is currently no other tent out there that works like this. This tool needs to help the user experience all of the benefits they can get out of this one tent system.


### Trello Board
- https://trello.com/b/aA9qdGNe/slinfin-configurator


### Feature Set

##### Minimum Viable Product(MVP) Feature Set:

1. Main image area
    1. Changing picture of parts being added and removed
    2. Image Gallery of “current config in action” that can be expanded (these change according to a few specific component selections)

2. Cart Area
    1. Items currently selected
    2. Weight & Price (per item)
    3. Image & overall weight and Price changes dynamically as items are selected and removed

3. Custom Options
    1. WebTruss
          - WebTruss
              - Img
              - Price & details

    2. FootPrint
          - Tub footprint  
             - Img
             - (descrip & price)
             - Already own

           - Flat footprint
              - Img
              - (descrip & price)
              - Already own

    3. FlySheet
        - Flysheet
            - Img
            - Options (must select one)
                - Price & details
                - Already Own

    4. InnerTentBody
        - Full Ripstop Body
            - Img
            - (descrip & price)

        - Mesh Body
            - Img
            - (descrip & price)

    5. Poles
        - Cross Poles (required)
            - Desc & price

        - Strut Poles  
            - Desc & price

        - Bow Pole
            - Desc & price

        - Use your own Trekking Poles
            - Descr & price ($0)

    6. Accessory Add-Ons
        - stakes

4. Warning/Info Box (tells you if you’re missing something vital, or what qualities come with your current selection through images, EX: mosquito protection, snow, rain, high winds, etc)  
5. Reactive screen display for a screen smaller than an iPad size (wonder how to not lose functionality with this)
6. Cart Website Integration or can send in an email to shop (orders aren’t so high right now that this would work as an interim) -- so depends on scope that is time appropriate


### Technology Selection
- My personal goal is to learn a new JavaScript framework to make a Single Page Web Tool that has multiple components that are very dynamic and responsive to the user’s input.  

  - ##### Front-end
      - Framework (React.js)  
      - CSS  
      - HTML
      - Babel
      - Npm
        - Money-math
        - React-bootstrap
        - Bootstrap-table
        - React-image-gallery
        - normalize.css
        - Webpack
        - Bootstrap

  - ##### Web infrastructure
      - Amazon AWS S3


### Wireframe (WIP)
- https://drive.google.com/file/d/0ByA4__sX7xYDUTdZenJkSm1va1E/view?usp=sharing
