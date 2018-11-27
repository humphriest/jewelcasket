import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

import './NavBar';
import { setCurrentView } from '../navigation/NavigationActions';
import { PRODUCTS_VIEW } from '../../const';

export default class NavBar extends Component {
  componentDidUpdate() {
    console.log(this.props, this.state);
  }

  _renderPage(pageToDisplay) {
    const { setCurrentView } = this.props;

    setCurrentView(pageToDisplay);
  }

  render() {
    return <Button onClick={() => this._renderPage(PRODUCTS_VIEW)}>Products</Button>;
  }
}
