import React from 'react';

import './SideBarView.css';

export default class SideBarView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'hello',
    };
  }

  _handleSearchChange = () => {
    console.log(this.search.value);
  };

  _renderFilters = () => {
    return (
      <div className="filterContainer">
        <ul style={{ 'list-style-type': 'none' }}>
          <li className="filterOption">Rings</li>
          <li className="filterOption">Pendants</li>
          <li className="filterOption">Bracelets & Chains</li>
          <li className="filterOption">Other</li>
        </ul>
      </div>
    );
  };

  _renderSearchBar = () => {
    return (
      <form className="searchBar">
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this._handleSearchChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  };

  render() {
    return (
      <div>
        <div className="sidebar" />
        {this._renderSearchBar()}
        {this._renderFilters()}
      </div>
    );
  }
}
