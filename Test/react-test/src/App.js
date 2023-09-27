import React, { useState, createContext } from 'react';

import CreateMovies from './CreateMovies';
import Movies from './Movies';

import './App.css';


export const MovieListContext = createContext();

function App() {

  const [movieList, setMovieList] = useState([]);

  return (
    <MovieListContext.Provider value={{movieList, setMovieList}}>
      <h1>Create Movie</h1>
      
      <CreateMovies/>

      <hr/>

      <h1>Movies</h1>

      {movieList && (
        <Movies/>
      )}


    </MovieListContext.Provider>
  );
}

export default App;
