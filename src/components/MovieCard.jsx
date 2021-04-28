import React from 'react';

function MovieCard(props) {
  const { title, subtitle, storyline, imagePath, rating } = props.movie;
  return (
    <section>
      <img src={ imagePath } alt="capa do filme" />
    </section>
  );
}

export default MovieCard;
