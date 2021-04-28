import React from 'react'

class MovieCard extends React.Component {
  render() {
    const test = this.props.movie;
    return (<div>{test}</div>)
  }
}

export default MovieCard
