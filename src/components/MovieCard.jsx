// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(props) {
  const { movie } = props;
  const { imagePath, rating, storyline, subtitle, title } = movie;
  return (
    <section>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <img src={ imagePath } alt="Capa do filme" />
      <Rating rating={ rating } />
    </section>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'Era do gelo',
    subtitle: 'Era do gelo 2',
    storyline: 'Era do gelo 3',
    imagePath: 'Era do gelo 4',
    rating: 5,
  },
};

export default MovieCard;
