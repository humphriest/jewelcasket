import React from 'react';
import renderView from './Router';
import NavBarContainer from './modules/navBar/NavBarContainer';

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
      </div>
    );
  }
}
