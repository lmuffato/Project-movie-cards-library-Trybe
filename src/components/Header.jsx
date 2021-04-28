// implement Header component here
import React from 'react';

class Header extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}
export default Header;