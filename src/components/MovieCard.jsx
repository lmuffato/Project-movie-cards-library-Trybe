import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className = 'movie-card'>
        <img 
          src={ movie.imagePath }
          alt = 'capa do filme'
          className = 'movie-card-image'
          ></img>
        <h4 className = 'movie-card-title' >{ movie.title }</h4>
        <h5 className = 'movie-card-subtitle'>{ movie.subtitle }</h5>
        <p className = 'movie-card-storyline'>{ movie.storyline }</p>
        <Rating 
          rating = {movie.rating}
          className = 'movie-card-rating'
        />
      </div>
    )
  }
}

export default MovieCard;
