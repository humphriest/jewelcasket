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
          <div className="col-md-4">
            <div className="footerColumnContainer">
              <div className="footerTitles">Contact Us</div>
              <ul className="addressList">
                <li className="addressListItem">The Jewel Casket</li>
                <li className="addressListItem">17 South Anne Street</li>
                <li className="addressListItem">Dublin 2</li>
                <li className="addressListItem">Ireland</li>
                <br />
                <li className="addressListItem">(+353)-1-6711262</li>
                <li className="addressListItem">enquiries@jewelCasket.ie</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footerColumnContainer">
              <div className="footerTitles">Shop By</div>
              <div
                onClick={() => this._handleSelectProductType(VIEW_RINGS)}
                className="footerDescriptions"
              >
                Rings
              </div>
              <div
                onClick={() => this._handleSelectProductType(VIEW_PENDANTS)}
                className="footerDescriptions"
              >
                Pendants
              </div>
              <div
                onClick={() => this._handleSelectProductType(VIEW_BRACELETS_CHAINS)}
                className="footerDescriptions"
              >
                Bracelets & Chains
              </div>
              <div
                onClick={() => this._handleSelectProductType(VIEW_EARRINGS)}
                className="footerDescriptions"
              >
                Earrings
              </div>
              <div
                onClick={() => this._handleSelectProductType(VIEW_BROOCHES)}
                className="footerDescriptions"
              >
                Brooches
              </div>
              <div
                onClick={() => this._handleSelectProductType(VIEW_CUFFLINKS)}
                className="footerDescriptions"
              >
                Cufflinks
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footerTitles">About Us</div>
          </div>
        </div>
      </div>
    );
  }
}
