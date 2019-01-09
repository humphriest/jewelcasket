import React from 'react';

import './WelcomeImage.css';
import { PRODUCTS_VIEW } from '../../const';
import { assets } from '../../assets';

export default class WelcomeImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this._updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._updateDimensions);
  }

  _updateDimensions = event => {
    if (event && event.target) {
      const { innerWidth } = event.target;

      this.setState({
        imageWidth: innerWidth,
      });
    }
  };

  _renderShopNowButton = () => {
    const { setCurrentView } = this.props;
    return (
      <button id="shopNowButton" onClick={() => setCurrentView(PRODUCTS_VIEW)}>
        <div>Shop Now</div>
      </button>
    );
  };

  _renderOverImageText = () => {
    return (
      <div className="overImageText">
        Modern & Antique Jewellery
        <div className="smallerOverImageText">
          We delivery high quality products at competitive prices
        </div>
      </div>
    );
  };

  render() {
    const { imageWidth } = this.state;

    return (
      <div className="col-xs-12 welcomeContainer">
        <img className="image" width={imageWidth} src={assets.background} />
        <div className="col-xs-3" />
        <div className="col-xs-4; position:absolute;">
          {this._renderOverImageText()}
          <div>{this._renderShopNowButton()}</div>
        </div>
      </div>
    );
  }
}
