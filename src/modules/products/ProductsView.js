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

  componentDidMount() {
    console.log(window.screen.height);
  }

  _renderJewellryType = () => {
    const { viewType } = this.props;
    switch (viewType) {
      case constants.VIEW_ALL: {
        return <div />;
      }
      case constants.VIEW_RINGS: {
        this.pageTitle = 'Rings';

        return getRings().map((product, key) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} key={key} />;
        });
      }
      case constants.VIEW_PENDANTS: {
        this.pageTitle = 'Pendants';

        return getPendants().map((product, key) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} key={key} />;
        });
      }
      case constants.VIEW_BRACELETS_CHAINS: {
        this.pageTitle = 'Bracelets & Chains';

        return getBraceletsChains().map((product, key) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} key={key} />;
        });
      }
      case constants.VIEW_EARRINGS: {
        this.pageTitle = 'Earrings';

        return getEarrings().map((product, key) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} key={key} />;
        });
      }
      case constants.VIEW_BROOCHES: {
        this.pageTitle = 'Brooches';

        return getBrooches().map((product, key) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} key={key} />;
        });
      }
      case constants.VIEW_CUFFLINKS: {
        this.pageTitle = 'Cufflinks';

        return getCufflinks().map((product, key) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} key={key} />;
        });
      }
      default:
        return <div />;
    }
  };

  render() {
    return (
      <div className="col-md-12 marginTop">
        <div className="col-md-12 pageMiddle">
          <div className="col-md-5 title">{this.pageTitle}</div>
          <div className="col-md-4 inStore">Visit us in store to see our prices!</div>
        </div>
        <div className="col-md-12 jewellryMiddle">{this._renderJewellryType()}</div>
      </div>
    );
  }
}
