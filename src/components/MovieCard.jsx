import React from 'react';
import PropTypes from 'prop-types';

function MovieCard(props) {
  const { movieInfo: { imagePath, title, subtitle, storyline, rating } } = props;

  return (
    <div className="movie-card">
      <img src={ imagePath } alt={ `foto ${title}` } />
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
      <p>{ storyline }</p>
      <p>{ rating }</p>
    </div>
  );
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
