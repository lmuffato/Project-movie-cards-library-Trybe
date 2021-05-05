// implement MovieList component here
import React from 'react';
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

MovieList.propTypes = movies.string;
MovieList.propTypes = movie.map.proptype.func;

export default MovieList;
