import React from 'react';

function MovieCard(props) {

  return (
    <div className="movie-card">
      <img src={props.movie.imagePath} alt={`foto ${props.movie.title}`} />
      <h2>{ props.movie.title }</h2>
      <h3>{ props.movie.subtitle }</h3>
      <p>{ props.movie.storyline }</p>
    </div>
  );
}

// function MovieCard(props) {
//   const { movieInfo: { imagePath, title, subtitle, storyline } } = props;
//   return (
//     <div className="movie-card">
//     <img src={ imagePath } alt={ `foto ${title}` } />
//     <h2>{ title }</h2>
//     <h3>{ subtitle }</h3>
//     <p>{ storyline }</p>
//     </div>
//   );
// }

export default MovieCard;
