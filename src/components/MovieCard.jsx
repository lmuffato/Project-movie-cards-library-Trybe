// implement MovieCard component here
import React from 'react';
import Proptypes from 'prop-types';

function MovieCard(props) {
  const { movie } = props;
  return (
    <section className="movie-card movie-card-body">
      <h4 className="movie-card-title">{ movie.title }</h4>
      <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
      <p className="movie-card-storyline">{ movie.storyline }</p>
      <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
    </section>
  );
}
MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    subtitle: Proptypes.string,
    storyline: Proptypes.string,
    rating: Proptypes.number,
    imagePath: Proptypes.string,
  }).isRequired,
};

export default MovieCard;
