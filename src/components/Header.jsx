// implement Header component here
import React from 'react';

function Header(prop) {
  const { title } = prop;
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
