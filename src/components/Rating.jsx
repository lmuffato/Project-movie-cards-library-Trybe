import React from 'react';
import Proptypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        { rating }
      </div>
    );
  }
}

Rating.propTypes = {
  rating: Proptypes.string.isRequired,
};

export default Rating;
