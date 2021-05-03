import React from 'react';
import Rating from './Rating';


// implement MovieCard componente

class MovieCard extends React.Component{
  render(){
    const {title, subtitle, storyline, rating, imagePath} = this.props
        return(
      <section>
        <img src= {imagePath} alt="imagem do filme"/>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <div><Rating rating = {rating} /></div>

      </section>
    )
  }
}

export default MovieCard