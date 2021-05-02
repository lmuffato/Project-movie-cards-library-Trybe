import React from 'react'
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props

    return (
      <div>
        { movies.map((movie,index) => {
    const { title, subtitle, storyline, rating, imagePath } = movie
    const movieKey = `Movie Title ${index+1}`
      return (
     <MovieCard 
      key={movieKey}
      movie={movie}
    />
    )})}
      </div>
    )
  }
}


export default MovieList;
