import React from 'react';
import Card from '@material-ui/core/Card';

import './ImageWithDescription.css';

export default class ImageWithDescription extends React.Component {
  _toggleModalAndSetProduct = () => {
    const { toggleProductModal, setProductToShow, product } = this.props;
    toggleProductModal();
    setProductToShow(product);
  };

  render() {
    const {
      isProductModalVisible,
      product: { image, title },
      isMobile,
    } = this.props;

    return (
      <div className='col-xs-6 col-md-3' id="imageContainerHeight">
        <Card className="imageContainer">
          <div onClick={this._toggleModalAndSetProduct}>
            <img width={'80%'} src={image} className="productImage" />
            <div className="titleContainer">{title}</div>
          </div>
        </Card>
      </div>
    );
  }
}
