// implement MovieCard component here

import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section>
        <li>
          {title}
        </li>
        <li>
          {subtitle}
        </li>
        <li>
          {storyline}
        </li>
        <li>
          {rating}
        </li>
        <img src={ imagePath } alt="imagem" />
      </section>
    );
  }
}

export default MovieCard;
