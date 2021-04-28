import React from 'react';

function MovieCard(props) {
  console.log(props);
  const { title, subtitle } = props;
  console.log(title);
  return (
    <div key={ title }>
      <p>{ title }</p>
      <p>{ subtitle }</p>
    </div>
  );
}

export default MovieCard;
