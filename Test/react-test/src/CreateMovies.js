import React, { useState, useContext } from 'react';

import { MovieListContext } from './App';



const CreateMovies = () => {

    const { movieList, setMovieList } = useContext(MovieListContext);

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setRelease_date] = useState('');

    let keyIndex = 0;

    const create = () => {

        if(id.trim().length === 0){
            alert("하나라도 입력되지 않은 경우 모든 요소를 입력해주세요.");
            return;
        }
        if(title.trim().length === 0){
            alert("하나라도 입력되지 않은 경우 모든 요소를 입력해주세요.");
            return;
        }
        if(genre.trim().length === 0){
            alert("하나라도 입력되지 않은 경우 모든 요소를 입력해주세요.");
            return;
        }
        if(release_date.trim().length === 0){
            alert("하나라도 입력되지 않은 경우 모든 요소를 입력해주세요.");
            return;
        }

        fetch("addMovie",{
            method : 'post',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                id : id,
                title : title,
                genre : genre,
                releaseDate : release_date
            })
        })
        .then( resp => resp.text())
        .then(movies => {
            if(movies === null){
                console.log("등록 실패");

            };

            fetch("/idCheck?id=" + id)
            .then(resp => resp.text())
            .then(count => {
                console.log(count);

                if(Number(count) !== 0){
                    alert("중복되는 ID 는 입력 될 수 없습니다");
                    return;
                }
                
            })
            .catch(e => console.log(e));

            const newMovie = {
                id : id,
                title : title,
                genre : genre,
                releaseDate : release_date
            }
            const newMovieList = [...movieList, newMovie];
    
            setMovieList(newMovieList);
    
            setId('');
            setTitle('');
            setGenre('');
            setRelease_date('');
            

        })
        .catch(e => console.log(e));
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

            <button onClick={create}>Add Movie</button>

            

        </>

    );
}

export default CreateMovies;