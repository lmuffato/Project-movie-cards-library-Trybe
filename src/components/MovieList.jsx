import React from "react";
import MovieCard from "./MovieCard";


// implement MovieList component here

class MovieList extends React.Component{
    render(){
      const {movies} = this.props;
      return(
        <div>
        {this.props.movies.map((movies) => {
            return(<MovieCard key={movies.title} movies= {movies}/>)
        })}
            </div>
      )
    }
  }
  

export default MovieList