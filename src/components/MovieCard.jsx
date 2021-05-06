import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <>
        <img src={ movie.imagePath } />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
      </>
    );
  }
};

export default MovieCard;
