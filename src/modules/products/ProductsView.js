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
import SideBarView from '../sideBar/SideBarView';
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
        // this.setState({
        this.pageTitle = 'Rings';
        // });
        return getRings().map((product, id) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} id={id} />;
        });
      }
      case constants.VIEW_PENDANTS: {
        // this.setState({
        this.pageTitle = 'Pendants';
        // });
        return getPendants().map((product, id) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} id={id} />;
        });
      }
      case constants.VIEW_BRACELETS_CHAINS: {
        // this.setState({
        this.pageTitle = 'Bracelets & Chains';
        // });
        return getBraceletsChains().map((product, id) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} id={id} />;
        });
      }
      case constants.VIEW_EARRINGS: {
        // this.setState({
        this.pageTitle = 'Earrings';
        // });this.pageTitle=
        return getEarrings().map((product, id) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} id={id} />;
        });
      }
      case constants.VIEW_BROOCHES: {
        // this.setState({
        this.pageTitle = 'Brooches';
        // });
        return getBrooches().map((product, id) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} id={id} />;
        });
      }
      case constants.VIEW_CUFFLINKS: {
        // this.setState({
        this.pageTitle = 'Cufflinks';
        // });
        return getCufflinks().map((product, id) => {
          const { image, title } = product;
          return <ImageWithDescription image={image} title={title} id={id} />;
        });
      }
      default:
        return <div />;
    }
  };

  render() {
    const { displayProductType } = this.props;
    return (
      <div className="col-md-12">
        <div className="col-md-3 ">
          <div className="sideBorder" style={{ height: window.screen.height }}>
            <SideBarView displayProductType={displayProductType} />
          </div>
        </div>
        <div className="col-md-9 middle">
          <div className="col-md-5 title">{this.pageTitle}</div>
          <div className="col-md-4 inStore">Visit us in store to see our prices!</div>
        </div>
        <div className="col-md-9 jewellryMiddle">{this._renderJewellryType()}</div>
      </div>
    );
  }
}
