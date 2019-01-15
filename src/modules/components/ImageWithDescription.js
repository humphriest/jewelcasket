import React from 'react';
import Card from '@material-ui/core/Card';

import './ImageWithDescription.css';

export default class ImageWithDescription extends React.Component {
  _toggleModalAndSetProduct = () => {
    const { toggleProductModal, setProductToShow, product } = this.props;
    toggleProductModal();
    setProductToShow(product);
  };

  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach(b => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  render() {
    const {
      isProductModalVisible,
      product: { image, title },
    } = this.props;
    console.log(image);
    const base64Flag = 'data:image/jpeg;base64,';
    const imageStr = this.arrayBufferToBase64(image.data);
    const newImage = `${base64Flag}${imageStr}`;

    console.log(newImage);
    return (
      <div className="col-xs-6 col-md-3" id="imageContainerHeight">
        <Card className="imageContainer">
          <div onClick={this._toggleModalAndSetProduct}>
            <img width={'80%'} src={newImage} className="productImage" />
            <div className="titleContainer">{title}</div>
          </div>
        </Card>
      </div>
    );
  }
}
