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
        <p className="contactUs">
          <p className="aboutContainer">
            The Jewel Casket is a family run Jewellers with over 30 years of experience. For
            generations we have been providing customers with a reliable expertise with our top of
            the line products.
            <br />
            <br />
            <ul className="addressList">
              <li className="addressListItem">
                For more assistance or pricing, come visit us instore to see our stunning and
                elegant products. Or email us at
                <a href="mailto:enquiries@jewelcasket.ie"> enquiries@jewelcasket.ie</a>.
              </li>
            </ul>
          </p>
          <div className="col-md-6">
            <ul className="addressList">
              <li className="addressListItem" id="listTitle">
                You can find us at
              </li>
              <br />
              <a
                href="https://www.google.ie/maps/place/The+Jewel+Casket/@53.3410833,-6.2592416,19z/data=!4m5!3m4!1s0x48670e9be997bec3:0xfce323dbd8b97cc!8m2!3d53.3410781!4d-6.2586986"
                style={{ cursor: 'pointer' }}
              >
                <li className="addressListItem">The Jewel Casket</li>
                <li className="addressListItem">17 South Anne Street</li>
                <li className="addressListItem">Dublin 2</li>
                <li className="addressListItem">Ireland</li>
              </a>
              <br />
              <li className="addressListItem">(+353)-1-6711262</li>
            </ul>
          </div>
          <p className="col-md-6">
            <p id="openingHoursTitle">Opening Hours</p>
            <p className="col-md-6">
              <ul className="addressList">
                <li className="addressListItem">Monday</li>
                <li className="addressListItem">Tuesday</li>
                <li className="addressListItem">Wednesday</li>
                <li className="addressListItem">Thursday</li>
                <li className="addressListItem">Friday</li>
                <li className="addressListItem">Saturday</li>
                <li className="addressListItem">Sunday</li>
              </ul>
            </p>
            <p className="col-md-6">
              <ul className="addressList">
                <li className="addressListItem">Closed</li>
                <li className="addressListItem">9.30am - 5.30pm</li>
                <li className="addressListItem">9.30am - 5.30pm</li>
                <li className="addressListItem">9.30am - 5.30pm</li>
                <li className="addressListItem">9.30am - 5.30pm</li>
                <li className="addressListItem">9.30am - 5.30pm</li>
                <li className="addressListItem">Closed</li>
              </ul>
            </p>
          </p>
        </p>
        <br />
        <div id="contactUsContainer">
          <div className="col-md-12" id="aboveMapMargin">
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_NkXItHgSzgMuS0x5pfbIABQbtDsv2QI"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    );
  }
}
