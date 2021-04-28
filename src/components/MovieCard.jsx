import React from 'react';

function MovieCard({ movie: { title, subtitle, storyline, imagePath, rating } }) {
return <img src={ imagePath } alt="FilmCardImg" />;
}
export default MovieCard;
