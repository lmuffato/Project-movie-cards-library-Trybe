import React from 'react';

function MovieCard(props) {
  const { title, subtitle, storyline, imagePath, rating } = props.movie;
  return (
    <section>
      <img src={ imagePath } alt="capa do filme" />
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
    </section>
  );
}

export default MovieCard;
