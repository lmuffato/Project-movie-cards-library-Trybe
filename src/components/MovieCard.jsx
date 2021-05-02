// implement MovieCard component here
import React from 'react';

function MovieCard(props) {
    const { title, subtitle, storyline, imagePath, rating } = props.movie;
    return (
        <div>
            <img src={imagePath} alt={' '}></img>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <p>{storyline}</p>
            <span>{rating}</span>
        </div>
    );
}
export default MovieCard;
