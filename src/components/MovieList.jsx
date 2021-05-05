import React from 'react';
import MovieCard from './MovieCard';
// import movies from './data';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { moviesList } = this.props;
    return (
      moviesList.map((movie) => (
        <MovieCard key={ movie.title } moviesCard={ movie } />))
    );
  }
}

// MovieList.protoType = {
//   title: PropTypes.string.isRequireds,
//   subtitle: PropTypes.string.isRequireds,
//   storyline: PropTypes.string.isRequireds,
//   rating: PropTypes.number.isRequireds,
//   imagePath: PropTypes.string.isRequireds,
// };

export default MovieList;
