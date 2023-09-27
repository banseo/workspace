import React, { useState, useContext } from 'react';

import { MovieListContext } from './App';

const Movies = () => {


    const { movieList, setMovieList } = useContext(MovieListContext);


    const removeMovie = (index) => {
        const newMovieList = [...movieList];

        newMovieList.splice(index,1);

        setMovieList(newMovieList);
    };


    let count = 0;


   
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Release_Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {movieList.map((movie, index) => {

                        return(
                            <tr key={count++}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.release_date}</td>
                                <td><button onClick={()=> {removeMovie(index)}}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>



            
        </>
    );
};

export default Movies;