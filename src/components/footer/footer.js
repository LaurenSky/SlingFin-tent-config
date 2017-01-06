import React from 'react';

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
    <ul>
      <li>
        <a href='/contact.html'>mail image</a>
      </li>
      <li>
        <a class="twitter" href="https://twitter.com/slingfin" target="new">twitter image</a>
      </li>
      <li>
        <a class="facebook" href="http://www.facebook.com/slingfin" target="new">facebook image</a>
      </li>
      <li>
        <a class="instagram" href="http://www.instagram.com/slingfin" target="new">instagram image</a>
      </li>
    </ul>
  </div>

export default Footer;
