import React from 'react';

import './App.css';
import renderView from './Router';
import NavBarContainer from './modules/navBar/NavBarContainer';
import FooterView from './modules/components/FooterView';

export default class AppView extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <NavBarContainer {...this.props} />
        {renderView(this.props)}
        <FooterView />
      </div>
    );
  }
}
