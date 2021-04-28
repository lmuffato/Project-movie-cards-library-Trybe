import React from 'react';

function MovieCard(props) {
  console.log(props);
  const { title, subtitle, storyline, imagePath, rating } = props;
  console.log(title);
  return (
    <div key={ title }>
      <p>{ title }</p>
      <p>{ subtitle }</p>
      <img src={ imagePath } alt={ `${title}` } />
    </div>
  );
}

export default MovieCard;
