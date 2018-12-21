import React from 'react';
import Slider from 'react-slick';

import WelcomeImage from '../components/WelcomeImage';
import './Homepage.css';
import { assets } from '../../assets';
import { VIEW_RINGS, VIEW_EARRINGS, PRODUCTS_VIEW } from '../../const';

export default class Homepage extends React.Component {
  goToSection = productType => {
    const { setCurrentView } = this.props;
    setCurrentView(PRODUCTS_VIEW);
  };

  _renderAboutUsSection = () => {
    return (
      <div className="aboutUsContainer">
        <div>
          The Jewel Casket is a family run Jewellers, located in the heart of Dublin City Center. We
          are situated off 17 South Anne Street, Dublin 2
        </div>
        <br />
        <div>
          Established in 1988, this family run business has provided its customers with quality and
          professional services spanning over four generations so we know what is takes when it
          comes to helping our customers choose the right piece of jewellry for their needs.
        </div>
        <br />
        <div>
          Our stock covers many different eras and styles, including Edwardian, Victorian and Art
          Deco, to name a few. We offer a business based on years of honesty, knowledgeable staff
          and offer excellent value compared to high-street jewellrs.
        </div>
      </div>
    );
  };

  _renderCategoryImagesSections = () => {
    return (
      <div className="col-md-12 categoriesSectionContainer">
        <div className="col-md-6">
          <img
            onClick={() => this.goToSection(VIEW_EARRINGS)}
            className="categoriesImageContainer"
            src={assets.homepageRing}
          />
          <div id="textOverImage">[ Rings ]</div>
        </div>
        <div className="col-md-6">
          <img
            onClick={() => this.goToSection(VIEW_EARRINGS)}
            className="categoriesImageContainer"
            src={assets.homepageRing}
          />
          <div id="textOverImage">[ Bracelets ]</div>
        </div>
      </div>
    );
  };

  render() {
    const { setCurrentView } = this.props;
    return (
      <div>
        <WelcomeImage setCurrentView={setCurrentView} />

        {this._renderAboutUsSection()}

        {this._renderCategoryImagesSections()}
      </div>
    );
  }
}
