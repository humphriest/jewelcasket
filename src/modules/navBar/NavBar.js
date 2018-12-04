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
      <Navbar id="bottomMargin">
        <Navbar.Header>
          <Navbar.Brand
            className="logo"
            eventKey={1}
            onClick={() => this._renderPage(HOMEPAGE_VIEW)}
          >
            The Jewel Casket
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem
            className="rightOption"
            eventKey={2}
            onClick={() => this._renderPage(PRODUCTS_VIEW)}
          >
            Products
          </NavItem>
          <NavItem
            className="rightOption"
            eventKey={3}
            onClick={() => this._renderPage(CONTACT_US)}
          >
            Contact Us
          </NavItem>
          <NavItem className="rightOption" eventKey={4} onClick={() => this._renderPage(REVIEWS)}>
            Reviews
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
