import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle, imagePath } = movies;
    return (
      <fieldset>
        <img src={ imagePath } alt="Imagem do filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        {/* <p>{storyLine}</p> */}
      </fieldset>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
