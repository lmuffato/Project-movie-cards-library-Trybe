import React from 'react';

function MovieCard(props) {
  console.log(props);
  const { title, subtitle, storyline, imagePath, rating } = props;
  console.log(title);
  return (
    <div key={ title }>
      <img src={ imagePath } alt={ `${title}` } />
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
      <p>{ storyline }</p>
    </div>
  );
}

export default MovieCard;
