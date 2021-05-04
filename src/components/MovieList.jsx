// implement MovieList component here
import React from 'react';

function MovieList(props) {
  const { movies } = props;
  return (
    <div>
      {movies}
    </div>
  );
}

export default MovieList;
