import React from 'react';
export default class ProductsView extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="col-md-12 middle">
        <div className="col-md-4">
          <div>left</div>
        </div>
        <div className="col-md-4">
          <div>middle</div>
        </div>
        <div className="col-md-4">
          <div>right</div>
        </div>
      </div>
    );
  }
}
