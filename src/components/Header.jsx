import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  }
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
