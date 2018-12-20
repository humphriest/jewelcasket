import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './NavBar.css';
import { setCurrentView } from '../navigation/NavigationActions';
import { HOMEPAGE_VIEW, PRODUCTS_VIEW, CONTACT_US, REVIEWS } from '../../const';

export default class NavBar extends Component {
  componentDidUpdate() {
    console.log(this.props);
  }

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
            <NavItem className="rightOption" onClick={() => this._renderPage(REVIEWS)}>
              Reviews
            </NavItem>
          </Nav>
        </Navbar>
        <div id="socialMediaBar" className="col-md-12">
          <div className="col-md-4 socialMediaIconsContainer">
            <span className="socialMediaIcon" />
            <span className="socialMediaIcon">tw</span>
            <span className="socialMediaIcon">ins</span>
          </div>
        </div>
      </div>
    );
  }
}
