import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { title } = this.pros;
    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  }
}
