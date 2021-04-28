import React from 'react';

function MovieList(props) {
  return (<>
    {props.movies.map((movie) => <MovieCard key={ movie.title } />)}
          </>
  );
}

export default MovieList;
