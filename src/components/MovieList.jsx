// implement MovieList component here
import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </main>
    );
  }
}
// Consulta ao course (https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react/0115c033-cfc0-48bc-bcf5-812b599ee79a/conteudos/20974555-f019-4a7d-aa2d-e0fd5546025e/proptypes-checagem-de-tipos/711cf7f5-ba96-43ab-bdb5-394e58b822c1?use_case=side_bar)
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};
// Código do Lucas Pedroso (https://github.com/tryber/sd-010-a-project-movie-cards-library/pull/1)
// me ajudou a descobrir o problema que o Linter estava acusando e resolver dessa forma:
MovieList.defaultProps = {
  movies: {},
};

export default MovieList;
