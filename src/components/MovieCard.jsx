import React from 'react';

function MovieCard(prop) {
  const { title, subtitle, storyline, imagePath, rating} = prop.movie;
  return (
    <div>
      <img src={ imagePath } alt="imagem do filme" />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
    </div>
  )
}

export default MovieCard;
