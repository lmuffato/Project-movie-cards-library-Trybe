// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>

        {/* <MovieCard movieInfo={ movies[0] } /> */}
        { movies.map((movie) => <MovieCard key={ movie.title } movieInfo={ movie } />) }

        {/* <Xmen xMenInfo={ xmenData[0] } />  */}
        {/* { xmenData.map((xmen) => <XMen key={ xmen.id} xMenInfo={ xmen } />) } */}

      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
  map: PropTypes.func.isRequired,
};

export default MovieList;
