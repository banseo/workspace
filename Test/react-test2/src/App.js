import React, { useState, createContext } from 'react';

import CreateMovie from './CreateMovie';

import Movies from './Movies';



import './App.css';

export const MovieListContext = createContext();

function App() {

  const [movieList, setMovieList] = useState([

    {id : 1, title : "Movie 1", genre : "Drama", release_date : "2023-04-14"},
    
    {id : 2, title : "Movie 2", genre : "Action", release_date : "2023-10-06"},
    
    {id : 3, title : "Movie 3", genre : "Comedy", release_date : "2023-10-10"}
    
    ]);



  return (
    <MovieListContext.Provider value={{movieList, setMovieList}}>
      <h1>Create Movie</h1>

      <CreateMovie/>


      <hr></hr>

      <h1>Movies</h1>

      <Movies/>




      </MovieListContext.Provider>
  );
}

export default App;
