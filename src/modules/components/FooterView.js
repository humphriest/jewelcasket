import React from 'react';

import './FooterView.css';
import { PRODUCTS_VIEW } from '../../const';

export default class FooterView extends React.Component {
  _handleSelectProductType = productType => {
    const { displayProductType, setCurrentView, currentView } = this.props;

    if (currentView === PRODUCTS_VIEW) {
      displayProductType(productType);
    } else {
      setCurrentView(PRODUCTS_VIEW);
      displayProductType(productType);
    }
  };

  _capitaliseFirstLetter = title => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  _renderCategories = () => {
    const { categories } = this.props;

    if (categories) {
      return categories.map((category, key) => (
        <li onClick={() => this._handleSelectProductType(category.title)}>
          {this._capitaliseFirstLetter(category.title)}
        </li>
      ));
    }
  };

  render() {
    return (
      <div className="col-xs-12 footerContainer">
        <div className="col-xs-10 middle">
          <div className="col-xs-6">
            <div className="footerColumnContainer">
              <div className="footerTitles">Contact Us</div>
              <ul className="addressList">
                <li>The Jewel Casket</li>
                <li>17 South Anne Street</li>
                <li>Dublin 2</li>
                <li>Ireland</li>
                <br />
                <li>(+353)-1-6711262</li>
                <li>enquiries@jewelCasket.ie</li>
                <br />
                <li> Copyright (C) 2010 The Jewel Casket. All Rights Reserved</li>
              </ul>
            </div>
          </div>
          <div className="col-xs-6">
            <ul className="footerColumnContainer addressList canClick">
              <div className="footerTitles">Shop By</div>
              {this._renderCategories()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
