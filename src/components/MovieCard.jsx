import React from 'react';
import Proptypes from 'prop-types';

class MovieCard extends React.Component {

}

MovieCard.prototype = {
    movie: Proptypes.shape({
        title: Proptypes.string.isRequired,
        subtitle: Proptypes.string.isRequired,
        storyline: Proptypes.string.isRequired,
        imagePath: Proptypes.string.isRequired,
        rating: Proptypes.string.isRequired,
    }).isRequired,
}

export default MovieCard;