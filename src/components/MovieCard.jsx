// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

function MovieCard(props) {
  return (
    <div className="movie-card">
      <img
        className="movie-card-image"
        src={props.movie.imagePath}
        alt={props.movie.title}
      />
      <div className="movie-card-body">
        <h4 className="movie-card-title">{props.movie.title}</h4>
        <h5 className="movie-card-subtitle">{props.movie.subtitle}</h5>
        <p className="movie-card-storyline">{props.movie.storyline}</p>
        <div className="movie-card-rating">
          <Rating rating={props.movie.rating} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
