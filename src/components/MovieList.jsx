import React from 'react';
import Proptypes from 'prop-types';

class MovieList extends React.Component {

}

MovieList.propTypes = {
    movie: PropTypes.objectOf(Proptypes.string).isRequired,
}

export default MovieList;
