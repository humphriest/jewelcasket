import React from 'react';

import './SideBarView.css';
import {
  VIEW_RINGS,
  VIEW_PENDANTS,
  VIEW_BRACELETS_CHAINS,
  VIEW_EARRINGS,
  VIEW_BROOCHES,
  VIEW_CUFFLINKS,
  PRODUCTS_VIEW,
} from '../../const';

export default class SideBarView extends React.Component {
  _handleSearchChange = () => {
    console.log(this.search.value);
  };

  _handleSelectProductType = productType => {
    const { displayProductType, setCurrentView, currentView } = this.props;

    if (currentView === PRODUCTS_VIEW) {
      displayProductType(productType);
    } else {
      setCurrentView(PRODUCTS_VIEW);
      displayProductType(productType);
    }
  };

  _renderFilters = () => {
    return (
      <ul className="filterContainer sideBarContainer paddingLeft">
        <span className="filterTitle">Product Categories</span>
        <li onClick={() => this._handleSelectProductType(VIEW_RINGS)}>
          <span className="greaterThanSign"> > </span>Rings
        </li>
        <li onClick={() => this._handleSelectProductType(VIEW_PENDANTS)}>
          <span className="greaterThanSign"> > </span>Pendants
        </li>
        <li onClick={() => this._handleSelectProductType(VIEW_BRACELETS_CHAINS)}>
          <span className="greaterThanSign"> > </span>Bracelets & Chains
        </li>
        <li onClick={() => this._handleSelectProductType(VIEW_EARRINGS)}>
          <span className="greaterThanSign"> > </span>Earrings
        </li>
        <li onClick={() => this._handleSelectProductType(VIEW_BROOCHES)}>
          <span className="greaterThanSign"> > </span>Brooches
        </li>
        <li onClick={() => this._handleSelectProductType(VIEW_CUFFLINKS)}>
          <span className="greaterThanSign"> > </span>Cufflinks
        </li>
        <br />
      </ul>
    );
  };

  _renderVisitUsInstore = () => {
    return (
      <div>
        <ul className="sideBarContainer paddingLeft">
          <span className="filterTitle">Visit us in store at</span>
          <br />
          <a
            href="https://www.google.ie/maps/place/The+Jewel+Casket/@53.3410833,-6.2592416,19z/data=!4m5!3m4!1s0x48670e9be997bec3:0xfce323dbd8b97cc!8m2!3d53.3410781!4d-6.2586986"
            className="normaliseLinkText"
          >
            <li>The Jewel Casket</li>
            <li>17 South Anne Street</li>
            <li>Dublin 2</li>
            <li>Ireland</li>
          </a>

          <br />
        </ul>
        <hr />
        <ul className="sideBarContainer paddingLeft">
          <span className="filterTitle"> Have any questions?</span>
          <li>email us at</li>
          <li>
            <a className="normaliseLinkText" href="mailto:thejewelcasketdublin@gmail.com">
            thejewelcasketdublin@gmail.com
            </a>
          </li>
        </ul>
      </div>
    );
  };

  _renderSearchBar = () => {
    return (
      <form className="searchBarContainer">
        <div className="filterTitle"> Product Search</div>
        <input
          className="searchBar"
          placeholder="Search products"
          ref={input => (this.search = input)}
          onChange={this._handleSearchChange}
        />
        <button className="searchButton">Search</button>
      </form>
    );
  };

  render() {
    return (
      <div>
        {this._renderFilters()}
        <hr />
        {this._renderVisitUsInstore()}
        <div />
      </div>
    );
  }
}
