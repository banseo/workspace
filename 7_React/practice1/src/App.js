import React, { useState, createContext } from 'react';

import SignupContainer from './Signup';

import './App.css';

function App() {
  const [signupView, setSignupView] = useState(false);

  const [loginMember, setLoginMember] = useState(null);
  
  const [todoList, setTodoList] = useState([]);



  return (
    <>
      <button onClick={ () => {setSignupView(!signupView)}}>
        { signupView ? ('회원 가입 닫기') : ('회원 가입 열기') }
      </button>

      <div className='signup-wrapper'>
        {signupView === true && (<SignupContainer/>)}
      </div>
    </>
  );
}

export default App;
