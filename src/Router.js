import React from 'react';

import HomePageViewContainer from './modules/homepage/HomePageViewContainer';
import ProductsViewContainer from './modules/products/ProductsViewContainer';
import MoreInfoViewContainer from './modules/moreInfo/MoreInfoViewContainer';
import ContactUsViewContainer from './modules/contactUs/ContactUsViewContainer';
import * as constants from './const';

export default function renderView(props) {
  const { currentView } = props;

  switch (currentView) {
    case constants.HOMEPAGE_VIEW:
      return <HomePageViewContainer {...props} />;
    case constants.PRODUCTS_VIEW:
      return <ProductsViewContainer {...props} />;
    case constants.MORE_INFO_VIEW:
      return <MoreInfoViewContainer {...props} />;
    case constants.CONTACT_US:
      return <ContactUsViewContainer {...props} />;
    default:
      return <HomePageViewContainer {...props} />;
  }
}
