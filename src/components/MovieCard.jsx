// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="movie" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
