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
  _handleSearchChange = () => {
    console.log(this.search.value);
  };

  _renderFilters = () => {
    const { displayProductType } = this.props;

    return (
      <div className="filterContainer">
        <ul class="unstyledList">
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
    return (
      <ul className="addressList searchBarContainer">
        <li className="addressListItem filterTitle">Visit us in store at</li>
        <br />
        <a
          href="https://www.google.ie/maps/place/The+Jewel+Casket/@53.3410833,-6.2592416,19z/data=!4m5!3m4!1s0x48670e9be997bec3:0xfce323dbd8b97cc!8m2!3d53.3410781!4d-6.2586986"
          className="normaliseLinkText"
        >
          <li className="addressListItem">The Jewel Casket</li>
          <li className="addressListItem">17 South Anne Street</li>
          <li className="addressListItem">Dublin 2</li>
          <li className="addressListItem">Ireland</li>
        </a>
        <br />
        <li className="addressListItem">(+353)-1-6711262</li>
        <br />
        <hr />

        <li className="searchBarContainer">
          Or email us at
          <a className="normaliseLinkText" href="mailto:enquiries@jewelcasket.ie">
            enquiries@jewelcasket.ie
          </a>
        </li>
      </ul>
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
        {this._renderSearchBar()}
        {this._renderFilters()}
        <hr />
        {this._renderVisitUsInstore()}
        <hr />
        <div />
      </div>
    );
  }
}
