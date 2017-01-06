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
  </div>

export default Footer;
