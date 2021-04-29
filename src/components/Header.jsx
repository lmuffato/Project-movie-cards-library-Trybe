// implement Header component here
import React from 'react';
import '../App.css';

function Header() {
  const title = 'Movie Cards Library';
  return (
    <header className="movie-card-header">
      <h1 className="page-title">{title}</h1>
    </header>
  );
}

export default Header;
