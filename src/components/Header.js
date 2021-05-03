// implement Header component here
import React, { Component } from 'react';

class Header extends Component {
  render() { // Sintaxe necessária para a renderização dos elemntos
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
