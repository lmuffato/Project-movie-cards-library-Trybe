// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// O componente MovieList recebe e renderiza todos os MovieCards através do map que retorna um novo array, contendo as informações dos filmes obtidas em data.js.

class MovieList extends React.Component {
  render() {
    const { movies } = this.props; // Como o componente foi criado com class utilizamos props conforme orientado no conteúdo do course e na aula ao vivo.
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

// Checagem de props feita com base no estudo do material https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/
// Usamos o PropTypes.arrayOf() para confirmar que a props é um array que, no caso, contém objetos.
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ),
};
// Utilizamos a defaultpropTypes para definir de forma estática uma props com valor default. src =https://blog.logrocket.com/a-complete-guide-to-default-props-in-react-984ea8e6972d/#:~:text=For%20a%20React%20component%20created,default%20props%20for%20the%20component.
MovieList.defaultpropTypes = {
  movies:
    [
      {
        title: 'Kingsglaive',
        subtitle: 'Final Fantasy XV',
        storyline: 'King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire\'s plans to steal the sacred crystal.',
        rating: 4.5,
        imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
      },
      {
        title: 'Final Fantasy',
        subtitle: 'Spirits Within',
        storyline: 'A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.',
        rating: 4.5,
        imagePath: 'images/Final_Fantasy_Spirits_Within.jpg',
      },
      {
        title: 'Ghost In The Shell',
        subtitle: 'Ghost In The Shell',
        storyline: 'A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).',
        rating: 5,
        imagePath: 'images/Ghost_In_The_Shell_2_0.jpg',
      },
      {
        title: 'Appleseed Alpha',
        subtitle: 'Appleseed Alpha',
        storyline: 'A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human\'s future hope, the legendary city of Olympus.',
        rating: 3.8,
        imagePath: 'images/Appleseed_Alpha.jpg',
      },
      {
        title: 'Resident Evil',
        subtitle: 'Vendetta',
        storyline: 'Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.',
        rating: 4.2,
        imagePath: 'images/Resident_Evil_Vendetta.jpg',
      },
    ],
};

export default MovieList;
