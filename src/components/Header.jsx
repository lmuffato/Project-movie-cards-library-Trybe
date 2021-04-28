// implement Header component here!
import React from 'react';

class Header extends React.Component {
  render() {
    const titulo = <h1>Movie Cards Library</h1>;
    return (
      <header>
        {titulo}
      </header>
    );
  }
}

export default Header;
