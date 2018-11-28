import React from 'react';

import WelcomeImage from '../components/WelcomeImage';
import './Homepage.css';

export default class Homepage extends React.Component {
  render() {
    const { setCurrentView } = this.props;
    return (
      <div>
        <WelcomeImage setCurrentView={setCurrentView} />
      </div>
    );
  }
}
