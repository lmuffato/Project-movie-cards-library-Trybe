import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Rating = ({ rating }) => (
  <div className="movie-card-rating">
    <span className="rating">{rating}</span>
  </div>
);

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
