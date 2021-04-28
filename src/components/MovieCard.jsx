// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
// O componente MovieCard renderiza todas as informações dos filmes obtidas da prop movie.

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // Como o componente foi criado com class utilizamos props conforme orientado no conteúdo do course e na aula ao vivo.
    const { title, subtitle, imagePath, storyline, rating } = movie;
    return (
      <div>
        <img src={ imagePath } alt={ `${title} Cover` } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>

    );
  }
}

export default MovieCard;
