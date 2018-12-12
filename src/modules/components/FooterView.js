import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './FooterView.css';
import { assets } from '../../assets';

export default class FooterView extends React.Component {
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
              <div className="footerDescriptions">Rings</div>
              <div className="footerDescriptions">Pendants</div>
              <div className="footerDescriptions">Bracelets & Chains</div>
              <div className="footerDescriptions">Earrings</div>
              <div className="footerDescriptions">Brooches</div>
              <div className="footerDescriptions">Cufflinks</div>
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
