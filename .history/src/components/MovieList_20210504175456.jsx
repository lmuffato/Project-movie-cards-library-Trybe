import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return(
      <div>
        {movies.map((camisetaConfortavel) => < MovieCard/>)}
      </div>
    );
  }
}
export default MovieList;