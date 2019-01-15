import React from 'react';

import WelcomeImage from '../components/WelcomeImage';
import ReviewCarousel from '../components/ReviewCorousel';

import './Homepage.css';
import { assets } from '../../assets';
import { PRODUCTS_VIEW } from '../../const';

export default class Homepage extends React.Component {
  goToSection = productType => {
    const { setCurrentView, displayProductType } = this.props;
    setCurrentView(PRODUCTS_VIEW);
    displayProductType(productType);
  };

  _renderAboutUsSection = () => {
    return (
      <div className="aboutUsContainer">
        <div>
          The Jewel Casket is a family run Jewellers, located in the heart of Dublin City Center. We
          are situated at 17 South Anne Street, Dublin 2
        </div>
        <br />
        <div>
          Established in 1988, this family run business has provided its customers with quality and
          professional services spanning over four generations so we know what is takes when it
          comes to helping our customers choose the right piece of jewellery for their needs.
        </div>
        <br />
        <div>
          Our stock covers many different eras and styles, including Edwardian, Victorian and Art
          Deco, to name a few. We offer a business based on years of honesty, knowledgeable staff
          and offer excellent value compared to other high-street jewellers.
        </div>
      </div>
    );
  };

  _renderCategoryImagesSections = () => {
    return (
      <div className="col-xs-12 categoriesSectionContainer">
        <div className="col-xs-6">
          <img
            onClick={() => this.goToSection('rings')}
            className="categoriesImageContainer"
            src={assets.homepageRing}
          />
          <div id="textOverImage">[ Rings ]</div>
        </div>
        <div className="col-xs-6">
          <img
            onClick={() => this.goToSection('pendants')}
            className="categoriesImageContainer"
            src={assets.homepagePendant}
          />
          <div id="textOverImage">[ Pendants ]</div>
        </div>
      </div>
    );
  };

  _renderReviews = () => {
    const { isMobile } = this.props;
    return (
      <div className="col-xs-12 reviewsContainer">
        <ReviewCarousel isMobile={isMobile} />
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

        {this._renderReviews()}
      </div>
    );
  }
}
