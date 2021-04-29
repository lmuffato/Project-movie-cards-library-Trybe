import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default function MovieCard({ movie }) {
  const { title, subtitle, storyline, rating, imagePath } = movie;
  return (
    <section className="movie-card">
      <section className="movie-card-body">
        <img src={ imagePath } alt="Banner do filme" className="movie-card-image image" />
        <h4 className="title movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </section>
      <Rating rating={ rating } />
    </section>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
// Para o proptypes de MovieCard a thread a seguir, do colega Lucas Pedroso, foi de grande ajuda:
// https://trybecourse.slack.com/archives/C01L16B9XC7/p1619575052491600
