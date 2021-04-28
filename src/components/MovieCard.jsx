import React from 'react';

function MovieCard(props) {
  const { movie: { title, subtitle, storyline, imagePath } } = props;
  return (
    <div>
      <img src={ imagePath } alt={ `Movie${title}` } />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{storyline}</p>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
