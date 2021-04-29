// import { prototype } from 'enzyme-adapter-react-16';
import React from 'react';
import '../css/movieCard.css';

function MovieCard(prop) {
  const { movie } = prop;
  // console.log(movies);

  return (
    <div className="cart-film">
      <img className="image-film" src={ movie.imagePath } alt={ movie.title } />
      <h4 className="title-film">{ movie.title }</h4>
      <h5 className="subtitle-film">{ movie.subtitle }</h5>
      <p className="storyline-film">{ movie.storyline }</p>
      {/* <p className="rating-film">{ film.rating }</p> */}
    </div>
  );
}

export default MovieCard;
