import React, { Component } from 'react';

import './styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="container-fluid d-flex">
        <div className="row">
          <div className="col">
            <h1 className="page-title">Movie Cards Library</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
