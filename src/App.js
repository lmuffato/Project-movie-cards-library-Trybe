import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
    // const text = 'Teste de renderização';
    // ReactDOM.render(text, document.getElementsByClassName('Header'));
    return (
      <div>
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
