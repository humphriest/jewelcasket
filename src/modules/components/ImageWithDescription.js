import React from 'react';

export default class ImageWithDescription extends React.Component {
  // componentWillMount() {
  //   debugger;
  // }
  render() {
    const { image, title } = this.props;
    // debugger;
    return (
      <div className="col-md-3 middle">
        <img width={'80%'} src={image} />
        <div>{title}</div>
      </div>
    );
  }
}
