import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import movies from '../data';

export default function MovieList() {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          prop={ movie }
          key={ movie.title }
        />))}
    </>
  );
}

// MovieList.defaultProps = {
//     title: 'Titulo',
//     subtitle: 'subtitulo',
//     imagePath: 'imagem',
// };

// MovieList.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   imagePath: PropTypes.string.isRequired,
// };
