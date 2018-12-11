import React from 'react';

import { assets } from '../../assets/';
import WelcomeImage from '../components/WelcomeImage';
import './Homepage.css';

export default class Homepage extends React.Component {
  render() {
    const { setCurrentView } = this.props;
    return (
      <div>
        <WelcomeImage setCurrentView={setCurrentView} />
        <div className="container">
          <div>
            The Jewel Casket is a family run Jewellers, located in the heart of Dublin City Center.
            We are situated off 17 South Anne Street, Dublin 2
          </div>
          <hr />
          <div>
            Established in 1988, this family run business has provided its customers with quality
            and professional services spanning over four generations so we know what is takes when
            it comes to helping our customers choose the right piece of jewellry for their needs.
          </div>
          <hr />
          <div>
            Our stock covers many different eras and styles, including Edwardian, Victorian and Art
            Deco, to name a few. We offer a business based on years of honesty, knowledgeable staff
            and offer excellent value compared to high-street jewellrs.
          </div>
        </div>
      </div>
    );
  }
}
