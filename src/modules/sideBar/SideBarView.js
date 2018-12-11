import React from 'react';

import './SideBarView.css';
import {
  VIEW_RINGS,
  VIEW_PENDANTS,
  VIEW_BRACELETS_CHAINS,
  VIEW_EARRINGS,
  VIEW_BROOCHES,
  VIEW_CUFFLINKS,
} from '../../const';

export default class SideBarView extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleSearchChange = () => {
    console.log(this.search.value);
  };

  _renderFilters = () => {
    const { displayProductType } = this.props;

    return (
      <div className="filterContainer">
        <ul style={{ 'list-style-type': 'none' }}>
          <li className="filterTitle">Product Categories</li>
          <li onClick={() => displayProductType(VIEW_RINGS)} className="filterOption">
            <span className="greaterThanSign"> > </span>Rings
          </li>
          <li onClick={() => displayProductType(VIEW_PENDANTS)} className="filterOption">
            <span className="greaterThanSign"> > </span>Pendants
          </li>
          <li onClick={() => displayProductType(VIEW_BRACELETS_CHAINS)} className="filterOption">
            <span className="greaterThanSign"> > </span>Bracelets & Chains
          </li>
          <li onClick={() => displayProductType(VIEW_EARRINGS)} className="filterOption">
            <span className="greaterThanSign"> > </span>Earrings
          </li>
          <li onClick={() => displayProductType(VIEW_BROOCHES)} className="filterOption">
            <span className="greaterThanSign"> > </span>Brooches
          </li>
          <li onClick={() => displayProductType(VIEW_CUFFLINKS)} className="filterOption">
            <span className="greaterThanSign"> > </span>Cufflinks
          </li>
        </ul>
      </div>
    );
  };

  _renderVisitUsInstore = () => {
    return <div>Visit Us In Store</div>;
  };

  _renderSearchBar = () => {
    return (
      <form className="searchBarContainer">
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
        <div className="sidebar" />
        {this._renderSearchBar()}
        {this._renderFilters()}
        <div />
      </div>
    );
  }
}
