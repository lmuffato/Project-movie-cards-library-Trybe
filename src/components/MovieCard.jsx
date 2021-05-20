import React from 'react';

class MovieCard extends React.Component {
    render() {
        const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
        return (
          <div>
            <div>
              <img  src={imagePath } alt="Capa do filme" />
              <h4>{ title }</h4>
              <h5>{ subtitle }</h5>
              <p>{ storyline }</p>
            </div>
          </div>
        );
      }
    }
export default MovieCard
