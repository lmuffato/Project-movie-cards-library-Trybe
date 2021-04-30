import React, { Component } from 'react';

class MovieCard extends React.Component {
  render() {
    console.log(this.props);
    const movie = {
      title: 'algo',
      subtitle: 'algo menor',
      storyline: 'algo textinho',
      imagePath: 'link da imagem',
      rating: 'nota do algo'
    }

    return (
      <div>
        <img src={movie.imagePath}></img>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
      </div>
    );
  }
}



export default MovieCard
