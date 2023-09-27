import React, { useState, useContext } from 'react';

import { MovieListContext } from './App';

const CreateMovies = () => {


    const { movieList, setMovieList } = useContext(MovieListContext);

    const readMovie = () => {

    }


    const deleteMovie = (movieNo, index) => {

        fetch("/delete", {
            method : 'delete',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : {
                movieNo
            }
        })
        .then(resp => resp.text())
        .then(result => {
            if(result === '0'){
                alert("삭제 실패");
                return;
            } 

        })
        .catch(e => console.log(e));


        
    }




    return(
        <>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Release_Date</th>
                    <th>Action</th>
                </tr>


                {movieList.map((movie, index) => (
                    <tr>
                        <td>{movie.id}</td>
                        <td>{movie.Title}</td>
                        <td>{movie.Genre}</td>
                        <td>{movie.Release_Date}</td>
                        <td><button onClick={ deleteMovie(movie.No, index)}></button></td>
                    </tr>
                ))}



            
        </>
    );
}

export default Movies;