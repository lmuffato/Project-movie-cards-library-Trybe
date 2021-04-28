import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const movies = [
    {
      title: 'Piratas do Caribe',
      subtitle: 'O Prisioneiro de Azcabam',
      storyline: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Maxime accusantium ab earum! 
                  Natus, quibusdam, voluptates quaerat molestias 
                  velit cupiditate nemo neque 
                  placeat aspernatur exercitationem`,
      imagePath: 'https://images.unsplash.com/photo-1611125967908-0d14a7889ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 10,
    },
    {
      title: 'O Senhor dos Anéis',
      subtitle: 'As Duas Torres',
      storyline: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Maxime accusantium ab earum! 
                  Natus, quibusdam, voluptates quaerat molestias 
                  velit cupiditate nemo neque 
                  placeat aspernatur exercitationem`,
      imagePath: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80',
      rating: 10,
    },
    {
      title: 'Piratas do Caribe',
      subtitle: 'O Prisioneiro de Azcabam',
      storyline: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Maxime accusantium ab earum! 
                  Natus, quibusdam, voluptates quaerat molestias 
                  velit cupiditate nemo neque 
                  placeat aspernatur exercitationem`,
      imagePath: 'https://images.unsplash.com/photo-1611125967908-0d14a7889ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 10,
    },
    {
      title: 'O Senhor dos Anéis',
      subtitle: 'As Duas Torres',
      storyline: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Maxime accusantium ab earum! 
                  Natus, quibusdam, voluptates quaerat molestias 
                  velit cupiditate nemo neque 
                  placeat aspernatur exercitationem`,
      imagePath: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80',
      rating: 10,
    },
    {
      title: 'Piratas do Caribe',
      subtitle: 'O Prisioneiro de Azcabam',
      storyline: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Maxime accusantium ab earum! 
                  Natus, quibusdam, voluptates quaerat molestias 
                  velit cupiditate nemo neque 
                  placeat aspernatur exercitationem`,
      imagePath: 'https://images.unsplash.com/photo-1611125967908-0d14a7889ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 10,
    },
    {
      title: 'O Senhor dos Anéis',
      subtitle: 'As Duas Torres',
      storyline: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Maxime accusantium ab earum! 
                  Natus, quibusdam, voluptates quaerat molestias 
                  velit cupiditate nemo neque 
                  placeat aspernatur exercitationem`,
      imagePath: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80',
      rating: 10,
    },
    {
      title: 'Piratas do Caribe',
      subtitle: 'O Prisioneiro de Azcabam',
      storyline: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Maxime accusantium ab earum! 
                  Natus, quibusdam, voluptates quaerat molestias 
                  velit cupiditate nemo neque 
                  placeat aspernatur exercitationem`,
      imagePath: 'https://images.unsplash.com/photo-1611125967908-0d14a7889ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 10,
    },
    {
      title: 'O Senhor dos Anéis',
      subtitle: 'As Duas Torres',
      storyline: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Maxime accusantium ab earum! 
                  Natus, quibusdam, voluptates quaerat molestias 
                  velit cupiditate nemo neque 
                  placeat aspernatur exercitationem`,
      imagePath: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80',
      rating: 10,
    },
  ];

  return (
    <div className="App d-flex">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MovieList movies={ movies } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
