import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './NavBar.css';
import { HOMEPAGE_VIEW, PRODUCTS_VIEW, CONTACT_US } from '../../const';

export default class NavBar extends Component {
  _renderPage(pageToDisplay) {
    const { setCurrentView } = this.props;
    setCurrentView(pageToDisplay);
  }

  render() {
    return (
      <div>
        <Navbar id="navStyle">
          <Navbar.Header>
            <Navbar.Brand className="logo" onClick={() => this._renderPage(HOMEPAGE_VIEW)}>
              The Jewel Casket
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem className="rightOption" onClick={() => this._renderPage(PRODUCTS_VIEW)}>
              Products
            </NavItem>
            <NavItem className="rightOption" onClick={() => this._renderPage(CONTACT_US)}>
              Contact Us
            </NavItem>
          </Nav>
        </Navbar>
        <div id="socialMediaBar" className="col-md-12">
          <div className="socialMediaIconsContainer">
            <span className="smallerSocialMediaIcon">
              <i className="fa fa-phone" />
              <span className="callUsText">+353 1 6711262</span>
            </span>
            <span>
              <a href="mailto:enquiries@jewelcasket.ie" className="smallerSocialMediaIcon">
                <i className="fa fa-envelope" />
                <span className="callUsText">enquiries@jewelcasket.ie</span>
              </a>
            </span>
            <span>
              <a
                target="blank"
                href="https://www.facebook.com/The-Jewel-Casket-1865900440191067/"
                className="socialMediaIcon"
              >
                <i className="fa fa-facebook" />
              </a>
            </span>
            <span>
              <a
                target="blank"
                href="https://www.instagram.com/thejewelcasket/?hl=en"
                className="socialMediaIcon"
              >
                <i className="fa fa-instagram" />
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
