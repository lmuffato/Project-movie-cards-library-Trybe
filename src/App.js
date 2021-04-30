import React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  render() {
    // const text = 'Teste de renderização';
    // ReactDOM.render(text, document.getElementsByClassName('Header'));
    return (
      <Header />
    );
  }
}

export default App;
