import React from 'react';

import ImageWithDescription from '../components/ImageWithDescription';
import { getRings, getPendants, getBraceletsChains } from '../../util/createProductArray';
import SideBarView from '../sideBar/SideBarView';
import './ProductsView.css';

export default class ProductsView extends React.Component {
  componentDidMount() {
    console.log(getRings(), getPendants());
  }

  _renderRings = () => {
    return getRings().map((product, id) => {
      const { image, title } = product;
      return <ImageWithDescription image={image} title={title} id={id} />;
    });
  };

  _renderPendants = () => {
    return getPendants().map((product, id) => {
      const { image, title } = product;
      return <ImageWithDescription image={image} title={title} id={id} />;
    });
  };

  _renderBraceletsChains = () => {
    return getBraceletsChains().map((product, id) => {
      const { image, title } = product;
      return <ImageWithDescription image={image} title={title} id={id} />;
    });
  };

  render() {
    return (
      <div className="col-md-12 ">
        <div className="col-md-2 ">
          <SideBarView />
        </div>
        <div className="col-md-10 middle">
          <div className="title">Rings</div>
          {this._renderRings()}

          {/* <p>
            <h1 className="title">Pendant</h1>
            {this._renderPendants()}
          </p>
          <p>
            <h1 className="title">Bracelets & Chains</h1>
            {this._renderBraceletsChains()}
          </p> */}
        </div>
      </div>
    );
  }
}
