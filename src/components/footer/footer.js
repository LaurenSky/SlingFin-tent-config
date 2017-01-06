import React from 'react';
var FontAwesome = require('react-fontawesome');
import './footer.css';


// class component
// class Credit extends React.Component {
//   render() {
//     return(
//       <div className='credit'>
//         <p>
//           SlingFin:
//           {' '}
//           From the Mountain to your trailhead.
//         </p>
//       </div>
//     )
//   }
// }

// same this but stateless component
const Footer = () =>
  <div className='credit'>
    <p>
      SlingFin:
      {' '}
      From the Mountain to your trailhead.
    </p>
    <section className="social-media-icons">
        <a href='http://www.slingfin.com/contact.html' target="new"><FontAwesome className="fa fa-envelope increase-icon" name='mail' aria-hidden="true" /></a>

        <a className="twitter" href="https://twitter.com/slingfin" target="new"><FontAwesome className="fa fa-twitter-square increase-icon" name='twitter' aria-hidden="true" /></a>

        <a className="facebook" href="http://www.facebook.com/slingfin" target="new"><FontAwesome className="fa fa-facebook-square increase-icon" name='facebook' aria-hidden="true" /></a>

        <a className="instagram" href="http://www.instagram.com/slingfin" target="new"><FontAwesome className="fa fa-instagram increase-icon" name='instagram' aria-hidden="true" /></a>
    </section>
  </div>

export default Footer;
