import React, { useState, useContext } from 'react';

import { MovieListContext } from './App';



const CreateMovie = () => {

    const { movieList, setMovieList } = useContext(MovieListContext);

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setRelease_date] = useState('');

    let keyIndex = 0;

    const addMovie = () => {

        if(!id || !title || !genre || ! release_date){
            alert("하나라도 입력되지 않은 경우 모든 요소를 입력해주세요.");

            return;
        }

        for(let movie of movieList){
            if(Number(id) === movie.id){
                alert("중복되는 ID 는 입력 될 수 없습니다.");
                
                return;
            }
        }

        const newMovie = {id : id, title : title, genre : genre, release_date : release_date}


        const newMovieList = [...movieList, newMovie];

        setMovieList(newMovieList);

        setId('');

        setTitle('');

        setGenre('');

        setRelease_date('');




    }

    return (

        <>
            <input type='text' placeholder='input movie id' value={id} onChange={e => setId(e.target.value) }/>

            <br/>

            <input type='text' placeholder='input movie title' value={title} onChange={e => setTitle(e.target.value)} />

            <br/>

            <input type='text' placeholder='input movie genre' value={genre} onChange={e => setGenre(e.target.value)}/>

            <br/>

            출시일 : <input type='date' value={release_date} onChange={e => setRelease_date(e.target.value)}/>

            <br/>

            <button onClick={addMovie}>Add Movie</button>

            

        </>

    );
}

export default CreateMovie;