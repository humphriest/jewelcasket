import React from 'react';

import './App.css';
import renderView from './Router';
import NavBarContainer from './modules/navBar/NavBarContainer';
import FooterView from './modules/components/FooterView';
import SideBar from './modules/sideBar/SideBarView';
import { HOMEPAGE_VIEW } from './const';

export default class AppView extends React.Component {
  _renderFooter = () => {
    const { setCurrentView } = this.props;
    return (
      <div className="footerContainer">
        <FooterView setCurrentView={setCurrentView} />
      </div>
    );
  };

  _renderMiddle = () => {
    const { currentView, displayProductType } = this.props;
    if (currentView === HOMEPAGE_VIEW) {
      return <div className="middleContainer">{renderView(this.props)}</div>;
    }
    return (
      <div className="middleContainer">
        <div className="col-md-12 sideBarContainer">
          <div className="col-md-3 sideBorder" style={{ height: window.screen.height }}>
            <SideBar displayProductType={displayProductType} />
          </div>
          <div className="col-md-9">{renderView(this.props)}</div>
        </div>
      </div>
    );
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
