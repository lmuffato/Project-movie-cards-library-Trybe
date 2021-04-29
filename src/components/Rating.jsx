// implement Rating component here
import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <div className="rating">
          {/* Rating: */}
          { rating }
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: propTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
