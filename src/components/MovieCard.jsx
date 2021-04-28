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
    </div>
  );
}

export default MovieCard;
