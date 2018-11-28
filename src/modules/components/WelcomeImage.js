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

  render() {
    const { imageWidth } = this.state;
    const { setCurrentView } = this.props;

    return (
      <div>
        <img className="image" width={imageWidth} src={require('../../assets/main.jpg')} />
        <div>
          <button id="shopNowButton" onClick={() => setCurrentView(PRODUCTS_VIEW)}>
            <div>Shop Now</div>
          </button>
        </div>
      </div>
    );
  }
}
