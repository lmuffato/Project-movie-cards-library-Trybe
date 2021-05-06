import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section className='movie-list'>
        {/* Como usar keys para identificar os elementos: https://reactjs.org/docs/lists-and-keys.html#keys */}
        { movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />))}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
// Referências:
// Como usar o PropTypes para corrigir erros do lint: https://stackoverflow.com/questions/38684925/react-eslint-error-missing-in-props-validation
