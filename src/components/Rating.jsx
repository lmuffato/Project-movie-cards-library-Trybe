import React, { Comment, Component } from 'react';

export default class Rating extends Component {
  render() {
    const { rating } = this.props;
    return <span>{rating}</span>;
  }
}
