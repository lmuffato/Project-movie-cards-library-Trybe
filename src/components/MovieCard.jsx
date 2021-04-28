import React from 'react';

function MovieCard({
  movie: { title, subtitle, storyline, imagePath, rating },
}) {
  return (
    <>
      <img src={ imagePath } alt="FilmCardImg" />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
    </>
  );
}
export default MovieCard;

// https://pt-br.reactjs.org/docs/fragments.html
