import React from 'react';

import ImageWithDescription from '../components/ImageWithDescription';
import {
  getRings,
  getPendants,
  getBraceletsChains,
  getEarrings,
  getBrooches,
  getCufflinks,
} from '../../util/createProductArray';
import './ProductsView.css';
import * as constants from '../../const';

export default class ProductsView extends React.Component {
  constructor(props) {
    super(props);

    this.pageTitle = 'Rings';
  }

  _renderSingleProductModal = () => {};

  _renderJewellryType = () => {
    const { viewType, toggleProductModal, isProductModalVisible } = this.props;
    let productsToShow = getRings();
    switch (viewType) {
      case constants.VIEW_ALL: {
        productsToShow = getRings();
        break;
      }
      case constants.VIEW_RINGS: {
        this.pageTitle = 'Rings';
        productsToShow = getRings();
        break;
      }
      case constants.VIEW_PENDANTS: {
        this.pageTitle = 'Pendants';
        productsToShow = getPendants();
        break;
      }
      case constants.VIEW_BRACELETS_CHAINS: {
        this.pageTitle = 'Bracelets & Chains';
        productsToShow = getBraceletsChains();
        break;
      }
      case constants.VIEW_EARRINGS: {
        this.pageTitle = 'Earrings';
        productsToShow = getEarrings();
        break;
      }
      case constants.VIEW_BROOCHES: {
        this.pageTitle = 'Brooches';
        productsToShow = getBrooches();
        break;
      }
      case constants.VIEW_CUFFLINKS: {
        this.pageTitle = 'Cufflinks';
        productsToShow = getCufflinks();
        break;
      }
      default:
        productsToShow = getRings();
    }

    return productsToShow.map((product, key) => {
      const { image, title } = product;
      return (
        <ImageWithDescription
          isProductModalVisible={isProductModalVisible}
          toggleProductModal={toggleProductModal}
          image={image}
          title={title}
          key={key}
        />
      );
    });
  };

  render() {
    return (
      <div className="col-md-12 marginTop">
        <div className="col-md-12 pageMiddle">
          <div className="col-md-5 title">{this.pageTitle}</div>
          <div className="col-md-4 inStore">Visit us in store to see our prices!</div>
        </div>
        <div className="col-md-12 jewellryMiddle">{this._renderJewellryType()}</div>
        {this._renderSingleProductModal()}
      </div>
    );
  }
}
