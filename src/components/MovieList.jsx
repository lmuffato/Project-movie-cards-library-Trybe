// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {

  const array = [
    {
      title: 'aladin',
      subtitle: 'Jasmin',
      storyline: 'seila',
      imagePath: 'URL',
      rating: 'OK'
    }
  ]


  return (
    <div>
      {array.map((element) => {
        return (
          <MovieCard movies={element} />
        )
      })}
      
    </div>
  );
}

export default MovieList;