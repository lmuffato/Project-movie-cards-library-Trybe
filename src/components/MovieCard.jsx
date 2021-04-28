import React from 'react';

function MovieCard(props){
    const {title, subtitle, storyline, imagePath, rating} = props

    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{storyline}</p>
            <img src={imagePath} alt={title}/>
            <span>{rating}</span>
        </div>
    )
}

export default MovieCard;