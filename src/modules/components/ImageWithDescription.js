import React from 'react';
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
    } = this.props;

    return (
      <div className="col-md-3">
        <div className="imageContainer" onClick={this._toggleModalAndSetProduct}>
          <img width={'80%'} src={image} />
          <div className="titleContainer">{title}</div>
        </div>
      </div>
    );
  }
}
