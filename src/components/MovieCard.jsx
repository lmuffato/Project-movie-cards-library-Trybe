import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <section>
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <span>{rating}</span>
          <img src={ imagePath } alt="Imagem do filme" />
        </div>
      </section>
    );
  }
}

export default MovieCard;
