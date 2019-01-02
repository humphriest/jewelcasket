import React from 'react';

import './App.css';
import renderView from './Router';
import NavBarContainer from './modules/navBar/NavBarContainer';
import FooterView from './modules/components/FooterView';
import SideBar from './modules/sideBar/SideBarView';
import { HOMEPAGE_VIEW } from './const';

export default class AppView extends React.Component {
  constructor(props) {
    super(props);

    this.mainBody = 0;
    this.state = {
      mainBodyHeight: null,
    };
  }

  componentDidUpdate() {
    const { mainBodyHeight } = this.state;

    if (
      this.mainBody &&
      this.mainBody.clientHeight &&
      this.mainBody.clientHeight !== mainBodyHeight
    ) {
      this.setState({
        mainBodyHeight: this.mainBody.clientHeight,
      });
    }
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
    const { currentView, displayProductType } = this.props;
    const { mainBodyHeight } = this.state;

    if (currentView === HOMEPAGE_VIEW) {
      return <div className="middleContainer">{renderView(this.props)}</div>;
    }
    return (
      <div className="middleContainer">
        <div className="col-md-12 sideBarContainer">
          <div className="col-md-3 sideBorder" style={{ height: mainBodyHeight }}>
            <SideBar displayProductType={displayProductType} />
          </div>
          <div
            ref={ref => {
              this.mainBody = ref;
            }}
            className="col-md-9"
          >
            {renderView(this.props)}
          </div>
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
