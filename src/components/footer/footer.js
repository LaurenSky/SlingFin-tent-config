import React from 'react';
var FontAwesome = require('react-fontawesome');
import './footer.css';
import { Row, Col } from 'react-bootstrap';


//stateless component
const Footer = () =>
  <Row className='credit'>
    <Col xs={6} md={10}>
      <h5>
        © 2017 SlingFin, Inc.
        {' '}
        From the Mountain to your trailhead.
      </h5>
    </Col>
    <Col xs={6} md={2} className="social-media-icons text-right">
        <a href='http://www.slingfin.com/contact.html' target="new"><FontAwesome className="fa fa-envelope increase-footer-icon" name='mail' aria-hidden="true" /></a>

        <a className="twitter" href="https://twitter.com/slingfin" target="new"><FontAwesome className="fa fa-twitter-square increase-footer-icon" name='twitter' aria-hidden="true" /></a>

        <a className="facebook" href="http://www.facebook.com/slingfin" target="new"><FontAwesome className="fa fa-facebook-square increase-footer-icon" name='facebook' aria-hidden="true" /></a>

        <a className="instagram" href="http://www.instagram.com/slingfin" target="new"><FontAwesome className="fa fa-instagram increase-footer-icon" name='instagram' aria-hidden="true" /></a>
    </Col>
  </Row>

export default Footer;
