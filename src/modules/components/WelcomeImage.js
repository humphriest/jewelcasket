import React from 'react';

import './WelcomeImage.css';
import { PRODUCTS_VIEW } from '../../const';

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

  render() {
    const { imageWidth } = this.state;

    return (
      <div className="col-md-12 welcomeContainer">
        <img className="image" width={imageWidth} src={require('../../assets/main.jpg')} />
        <div>{this._renderShopNowButton()}</div>
      </div>
    );
  }
}
