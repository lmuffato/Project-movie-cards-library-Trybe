import React from 'react';
import MovieCard from './MovieCard';

function MovieList(movies) {
  const filmes = ['Aleluia', 'senhor dos js', 'abracadabra', 'a vingança do react', 'uma magica chamada props'];

  return (
    <section>
      {filmes.map((movie, index) => {
          return (
              <MovieCard key={ movie } num={ index } />

          );
      })}

    </section>
  );
}

export default MovieList;

