import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // const keys = movies.map((movie) => Object.keys(movie).map((key) => ))
    // console.log(keys)
    // const filmes = movies.map((movie) => <p key={movie.title}>{movie.title}</p>
    // )
    // const { movie: oneMovie } = this.props;
    const { movie } = this.props;
    return (
      <section>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <p>
          {movie.rating}
          {movie.ratingThree}
        </p>
        <img src={ movie.imagePath } alt="" />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
    ratingThree: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    rating: 0,
    ratingThree: 0,
  }),
};

export default MovieCard;
