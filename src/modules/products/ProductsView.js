import React from 'react';
import ReactModal from 'react-modal';
import ReactImageMagnify from 'react-image-magnify';

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

    this.state = {
      chosenProduct: null,
      totalNumChosenProduct: getRings().length,
    };
  }

  _setProductToShow = chosenProduct => {
    this.setState({
      chosenProduct,
    });
  };

  _renderSingleProductModal = () => {
    const { chosenProduct } = this.state;
    const { isProductModalVisible, toggleProductModal } = this.props;

    if (isProductModalVisible) {
      const { image, title } = chosenProduct;

      return (
        <ReactModal
          ariaHideApp={false}
          className="modalContainer"
          onRequestClose={() => toggleProductModal()}
          isOpen={isProductModalVisible}
        >
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: title,
                isFluidWidth: true,
                src: image,
              },
              largeImage: {
                src: image,
                width: 1300,
                height: 1600,
              },
              enlargedImagePosition: 'over',
            }}
          />
          <div className="imageTitle">{title}</div>
        </ReactModal>
      );
    }
    return null;
  };

  _renderJewelleryType = () => {
    const { viewType, toggleProductModal, isProductModalVisible, isMobile } = this.props;
    const { totalNumChosenProduct } = this.state;

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
        break;
    }

    if (totalNumChosenProduct !== productsToShow.length) {
      this.setState({
        totalNumChosenProduct: productsToShow.length,
      });
    }
    return productsToShow.map((product, key) => {
      return (
        <ImageWithDescription
          toggleProductModal={toggleProductModal}
          product={product}
          key={key}
          setProductToShow={this._setProductToShow}
          isMobile={isMobile}
        />
      );
    });
  };

  render() {
    const { totalNumChosenProduct } = this.state;

    return (
      <div className="col-xs-12 marginTop">
        <div className="col-xs-12 pageMiddle">
          <div className="col-xs-5 title">{this.pageTitle}</div>
          <div className="col-xs-4 inStore">Visit us in store to see our prices!</div>
        </div>
        <div className="col-xs-12 jewelleryMiddle">
          <div className={totalNumChosenProduct <= 4 ? 'singleLineProducts' : null}>
            {this._renderJewelleryType()}
          </div>
        </div>
        {this._renderSingleProductModal()}
      </div>
    );
  }
}
