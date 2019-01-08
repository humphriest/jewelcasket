import React from 'react';

import './FooterView.css';
import {
  VIEW_RINGS,
  PRODUCTS_VIEW,
  VIEW_PENDANTS,
  VIEW_BRACELETS_CHAINS,
  VIEW_EARRINGS,
  VIEW_BROOCHES,
  VIEW_CUFFLINKS,
} from '../../const';

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

  render() {
    return (
      <div className="col-md-12 footerContainer">
        <div className="col-md-10 middle">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <ul className="footerColumnContainer addressList canClick">
              <div className="footerTitles">Shop By</div>
              <li onClick={() => this._handleSelectProductType(VIEW_RINGS)}>Rings</li>
              <li onClick={() => this._handleSelectProductType(VIEW_PENDANTS)}>Pendants</li>
              <li onClick={() => this._handleSelectProductType(VIEW_BRACELETS_CHAINS)}>
                Bracelets & Chains
              </li>
              <li onClick={() => this._handleSelectProductType(VIEW_EARRINGS)}>Earrings</li>
              <li onClick={() => this._handleSelectProductType(VIEW_BROOCHES)}>Brooches</li>
              <li onClick={() => this._handleSelectProductType(VIEW_CUFFLINKS)}>Cufflinks</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
