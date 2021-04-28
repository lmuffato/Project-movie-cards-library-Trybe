import React from 'react';

function MovieCard(props) {
  console.log(props);
  console.log(props.title);
  return (
    <div key={props.title}>
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default MovieCard;
