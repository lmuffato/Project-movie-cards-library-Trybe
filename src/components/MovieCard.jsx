// implement MovieCard component here
import React from 'react';

function MovieCard({ movie }) {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  // console.log(subtitle, storyline, imagePath, rating);
  console.log(title);
  return (
    // <li>{ movie }</li>
    <div>
      <img src={ imagePath } alt="Imagem Filme" />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
    </div>
  );
}

export default MovieCard;
