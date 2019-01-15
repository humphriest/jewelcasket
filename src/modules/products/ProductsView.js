import React from 'react';
import ReactModal from 'react-modal';
import ReactImageMagnify from 'react-image-magnify';
import ImageWithDescription from '../components/ImageWithDescription';
import './ProductsView.css';

export default class ProductsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenProduct: null,
      totalNumChosenProduct: 10,
    };
  }

  // componentDidMount() {
  //   this._createProduct();
  // }

  _createProduct() {
    const { products, createProduct } = this.props;

    // const productBody = {
    //   title: 'fake image',
    //   category: 'rings',
    //   image: '../../assets/mainBackground.jpg',
    // };
    // createProduct(productBody);

    console.log(products);
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
    const {
      viewType,
      toggleProductModal,
      isProductModalVisible,
      isMobile,
      categories,
      products,
    } = this.props;
    const { totalNumChosenProduct } = this.state;

    let productsToShow = [];

    if (totalNumChosenProduct !== productsToShow.length) {
      this.setState({
        totalNumChosenProduct: productsToShow.length,
      });
    }
    return categories.map((category, key) => {
      if (category.title === viewType) {
        const productsInCategory = category.products;

        return productsInCategory.map((product, key) => {
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
      }
    });
  };

  render() {
    const { viewType } = this.props;
    const { totalNumChosenProduct } = this.state;

    return (
      <div className="col-xs-12 marginTop">
        <div className="col-xs-12 pageMiddle">
          <div className="col-xs-5 title">{viewType}</div>
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
