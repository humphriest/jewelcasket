import React from 'react';
import './ImageWithDescription.css';

export default class ImageWithDescription extends React.Component {
  render() {
    const { image, title } = this.props;
    return (
      <div className="col-md-3 middle">
        <img width={'80%'} src={image} />
        <div className="titleContainer">{title}</div>
      </div>
    );
  }
}
