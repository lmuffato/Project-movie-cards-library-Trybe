import React, { Component } from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { moviesList } = this.props;
    return (
      <section>
        {moviesList.map((movies) => <MovieCard key={ movies.id } movie={ movies } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
