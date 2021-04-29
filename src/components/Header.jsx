import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Header = ({ title }) => (
  <header className="movie-card-header">
    <h1 className="page-title">{ title }</h1>
  </header>
);

Header.defaultProps = {
  title: 'Movie Cards Library',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
