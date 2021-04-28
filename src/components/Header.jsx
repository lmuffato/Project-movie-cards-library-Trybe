import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header>
      <h1>{ props.text }</h1>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
