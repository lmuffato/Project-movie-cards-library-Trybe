// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

function MovieCard(props) {
  const { movieInfo } = props;
  console.log(movieInfo);

  return (
    <section>
      <img src={ movieInfo.imagePath } alt={ movieInfo.title } />
      <h4>{ movieInfo.title }</h4>
      <h5>{ movieInfo.subtitle }</h5>
      <p>{ movieInfo.storyline }</p>
    </section>
  );
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
