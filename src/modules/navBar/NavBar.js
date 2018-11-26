import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './NavBar';
import { setCurrentView } from '../navigation/NavigationActions';
import * as constants from '../../const';

export default class NavBar extends React.Component {
  _renderPage(pageToDispay) {
    const { serCurrentView } = this.props;
    console.log('here', pageToDispay);
    setCurrentView(pageToDispay);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            {/* <a href="#home">React-Bootstrap</a> */}
            <h1 id="logo">The Jewel Casket</h1>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} onSelect={() => this._renderPage(constants.PRODUCTS_VIEW)}>
            Products
          </NavItem>
          <NavItem eventKey={2} onSelect={() => this._renderPage(constants.MORE_INFO_VIEW)}>
            More Information
          </NavItem>
          <NavItem eventKey={3} onSelect={() => this._renderPage(constants.CONTACT_US)}>
            Contact Us
          </NavItem>
          <NavItem eventKey={4} onSelect={() => this._renderPage(constants.REVIEWS)}>
            Reviews
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
