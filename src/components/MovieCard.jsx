import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt={ title } className="movie-card-image" />
        <div className="movie-card-body">
          <h3 className="movie-card-title">{ title }</h3>
          <h4 className="movie-card-subtitle">{ subtitle }</h4>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
