import React from 'react';
import './ImageWithDescription.css';

export default class ImageWithDescription extends React.Component {
  _toggleProductModal = () => {
    const { toggleProductModal } = this.props;

    toggleProductModal();
  };

  render() {
    const { image, title, isProductModalVisible } = this.props;

    return (
      <div className="col-md-3">
        <div className="imageContainer" onClick={this._toggleProductModal}>
          <img width={'80%'} src={image} />
          <div className="titleContainer">{title}</div>
        </div>
      </div>
    );
  }
}
