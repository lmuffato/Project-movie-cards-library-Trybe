import React from 'react';
import PropTypes from 'prop-types';

// Codigo consultado em: https://github.com/tryber/sd-09-project-movie-cards-library/pull/115/files?file-filters%5B%5D=.jsx
class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <div className="movie-card-rating">
        <p className="rating">
          {rating}
        </p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 5,
};

export default Rating;
