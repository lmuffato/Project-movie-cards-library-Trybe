// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

function MovieCard(props) {
  const { movies } = props;
  return (
    <div className="movie-card">
      <img className="image" src={ movies.imagePath } alt="Imagem da capa do Filme " />
      <p className="title">{movies.title}</p>
      <p className="subtitle">{movies.subtitle}</p>
      <p className="story-line">{movies.storyline}</p>
    </div>
  );
}

MovieCard.propTypes = {
  movies: PropTypes.string.isRequired,
};
export default MovieCard;
