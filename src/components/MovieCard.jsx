import React from 'react';
import Rating from './Rating'
import PropTypes from 'prop-types'

function MovieCard(props) {
  const { title, subtitle, storyline, rating, imagePath } = props.movie;
  return (
    <div>
      <img src={imagePath} />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={rating}/>
    </div>
  );
}

export default MovieCard;
