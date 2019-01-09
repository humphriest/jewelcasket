import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import './ContactUsView.css';

export default class ContactUsView extends React.Component {
  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap defaultZoom={15} defaultCenter={{ lat: 53.34109, lng: -6.258691 }}>
          {props.isMarkerShown && <Marker position={{ lat: 53.34109, lng: -6.258691 }} />}
        </GoogleMap>
      ))
    );

    return (
      <div id="contactUsContainer">
        <div className="title">About Us</div>
        <div className="contactUs">
          <div className="aboutContainer">
            The Jewel Casket is a family run Jewellers with over 30 years of experience. For
            generations we have been providing customers with a reliable expertise with our top of
            the line products.
            <br />
            <br />
            <div className="addressList">
              For more assistance or pricing, come visit us instore to see our stunning and elegant
              products. Or email us at
              <a href="mailto:enquiries@jewelcasket.ie"> enquiries@jewelcasket.ie</a>.
            </div>
          </div>
          <div className="col-xs-6">
            <ul className="addressList">
              <li id="listTitle">You can find us at</li>
              <br />
              <a
                href="https://www.google.ie/maps/place/The+Jewel+Casket/@53.3410833,-6.2592416,19z/data=!4m5!3m4!1s0x48670e9be997bec3:0xfce323dbd8b97cc!8m2!3d53.3410781!4d-6.2586986"
                style={{ cursor: 'pointer' }}
              >
                <li>The Jewel Casket</li>
                <li>17 South Anne Street</li>
                <li>Dublin 2</li>
                <li>Ireland</li>
              </a>
              <br />
              <li>(+353)-1-6711262</li>
            </ul>
          </div>
          <div className="col-xs-6">
            <div id="openingHoursTitle">Opening Hours</div>
            <div className="col-xs-6">
              <ul className="addressList">
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
              </ul>
            </div>
            <div className="col-xs-6">
              <ul className="addressList">
                <li>Closed</li>
                <li>9.30am - 5.30pm</li>
                <li>9.30am - 5.30pm</li>
                <li>9.30am - 5.30pm</li>
                <li>9.30am - 5.30pm</li>
                <li>9.30am - 5.30pm</li>
                <li>Closed</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div id="contactUsContainer">
          <div className="col-xs-12" id="aboveMapMargin">
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_NkXItHgSzgMuS0x5pfbIABQbtDsv2QI"
              loadingElement={<div style={{ height: `400px` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    );
  }
}
