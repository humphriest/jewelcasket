import React from 'react';
import renderView from './Router';

export default class AppView extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div>This is the homepage</div>
        {renderView(this.props)}
      </div>
    );
  }
}
