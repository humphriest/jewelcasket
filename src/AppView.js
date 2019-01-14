import React from 'react';
import axios from 'axios';

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

  componentWillMount() {
    window.addEventListener('resize', this._handleWindowSizeChange);
  }

  componentDidMount() {
    const { getProducts, categories } = this.props;
    getProducts();
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this._handleWindowSizeChange);
  }

  _handleWindowSizeChange = () => {
    const { setIsMobile } = this.props;

    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

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
    const { currentView, displayProductType, setCurrentView, categories } = this.props;
    return (
      <div className="footerContainer">
        <FooterView
          setCurrentView={setCurrentView}
          currentView={currentView}
          displayProductType={displayProductType}
          categories={categories}
        />
      </div>
    );
  };

  _renderMiddle = () => {
    const { currentView, displayProductType, setCurrentView, categories } = this.props;
    const { mainBodyHeight } = this.state;

    if (currentView === HOMEPAGE_VIEW) {
      return <div className="middleContainer">{renderView(this.props)}</div>;
    }
    return (
      <div className="middleContainer">
        <div className="col-xs-12 sideBarContainer">
          <div className="col-xs-3 sideBorder" style={{ height: mainBodyHeight }}>
            <SideBar
              setCurrentView={setCurrentView}
              currentView={currentView}
              displayProductType={displayProductType}
              categories={categories}
            />
          </div>
          <div
            ref={ref => {
              this.mainBody = ref;
            }}
            className="col-xs-9"
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
