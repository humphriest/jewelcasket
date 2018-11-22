import React from 'react';

import HomePageViewContainer from './modules/homepage/HomePageViewContainer';
import ProductsViewContainer from './modules/products/ProductsViewContainer';

export default function renderView(props) {
  const { currentView } = props;

  switch (currentView) {
    case 'homepage':
      return <HomePageViewContainer {...props} />;

    case 'products':
      return <ProductsViewContainer {...props} />;
    default:
      return <HomePageViewContainer {...props} />;
  }
}
