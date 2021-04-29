// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;
  return (
    <section className="movie-card-rating">
      <div className="rating">{rating}</div>
    </section>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
