import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyLine, imagePath } = movie;
    return (
      <fieldset>
        <img src={ imagePath } alt="Imagem do filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyLine}</p>
      </fieldset>
    );
  }
}

export default MovieCard;
