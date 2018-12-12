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

  _renderFooter = () => {
    const { setCurrentView } = this.props;
    return (
      <div className="footerContainer">
        <FooterView setCurrentView={setCurrentView} />
      </div>
    );
  };

  _renderMiddle = () => {
    return <div className="middleContainer">{renderView(this.props)}</div>;
  };

  render() {
    return (
      <div className="parentContainer">
        <NavBarContainer {...this.props} />
        {this._renderMiddle()}
        {this._renderFooter()}
      </div>
    );
  }
}
