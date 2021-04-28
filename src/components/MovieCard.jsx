// implement MovieCard component here
import React from 'react';

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
export default MovieCard;
