// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(props) {
  const { movies } = props;
  const { title, subtitle, storyline, imagePath, rating } = movies;
  return (
    <section>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <img src={ imagePath } alt="Capa do filme" />
      <Rating nota={ rating } />
    </section>
  );
}

MovieCard.propTypes = {
  movies: {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  },
};

MovieCard.defaultProps = {
  movies: {
    title: 'Era do Gelo',
    subtitle: 'Era do Gelo',
    storyline: 'Era da extinção',
    imagePath: 'https://almeidajunior-prod1.s3.amazonaws.com/prod/uploads/news/5c897bf7868b8.jpg',
    rating: 4.9,
  },
};

export default MovieCard;
