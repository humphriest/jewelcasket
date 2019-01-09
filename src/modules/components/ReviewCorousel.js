import React from 'react';
import Slider from 'react-slick';
import StarRatings from 'react-star-ratings';

import reviews, { dateFromNow } from '../../util/reviewsData';

import './ReviewCorousel.css';

export default class ReviewCorousel extends React.Component {
  _renderReviews = () => {
    const { isMobile } = this.props;

    return reviews.map((review, key) => {
      return (
        <div className="reviewContainer">
          <img src={review.image} alt="review" className="profileImage" />
          <div className="reviewBoundary">
            <i id="quotes" className="fa fa-quote-right" />
            <div className="reviewBody">
              <div className="reviewAuthor">{review.name}</div>
              <div className="reviewComment">{review.date}</div>
              <div className="reviewComment">{review.comment}</div>
              <div className="reviewStar">
                <StarRatings
                  rating={review.rating}
                  starRatedColor="#ffe100"
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                  starDimension={isMobile ? '0.7vw' : '2vw'}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    dateFromNow();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      className: 'center',
      centerMode: true,
      centerPadding: '35vw',
    };
    return (
      <div>
        <Slider {...settings}>{this._renderReviews()}</Slider>
      </div>
    );
  }
}
