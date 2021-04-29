import React, { Component } from 'react';
import '../../node_modules/bulma/css/bulma.min.css';

class Header extends Component {
  render() {
    return (
      <header className="hero is-halfheight is-link">
        <div className="hero-body">
          <h1 className="title">Movie Cards Library</h1>
        </div>
      </header>);
  }
}

export default Header;
