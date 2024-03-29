import React, { useState } from 'react';

const SignupContainer = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');
    const [result, setResult] = useState('');


    const idCheck = () => {
        console.log("idCheck");
        
    };
    const signup = () => {
        console.log("signup");
        
    };



    return(
        <div className='signup-container'>
            <label>
                ID :
                <input type='text'
                    onChange={ e => {
                        idCheck(e.target.value)
                    }}
                    value={id}
                />
            </label>
            
            <label>
                PW :
                <input type='password'
                    onChange={ e => {setPw(e.target.value)}}
                    value={pw}
                />
            </label>
            
            <label>
                PW CHECK :
                <input type='password'
                    onChange={ e => {setPwCheck(e.target.value)}}
                    value={pwCheck}
                />
            </label>
            
            <label>
                NAME:
                <input type='text'
                    onChange={ e => {setName(e.target.value)}}
                    value={name}
                />
            </label>

            <button onClick={signup}>가입하기</button>

            <hr/>

            <h3>{result}</h3>

        </div>
    );
}
export default SignupContainer;