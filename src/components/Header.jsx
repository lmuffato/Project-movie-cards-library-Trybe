// implement Header component here
// Iniciando o projeto 🚀tus
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1>Movie Cards Library</h1>
        <div>
          <h2>Ordem de lançamento dos filmes da</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" alt="marvel" />
        </div>
      </header>
    );
  }
}

export default Header;
