import React, {useState} from "react";
import {axiosWithAuth} from '../axiosWithAuth'



const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [LoginForm,setLoginForm] =useState({
    username:'',
    password:''
  })
 
{/*Lambda School
i<3Lambd4*/}
  return (
    <>

    
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        axiosWithAuth().post('/login', LoginForm)
        .then(res=>{
          console.log(res)
          localStorage.setItem('token',res.data.payload)
          props.history.push('/Private')
        })
        .catch(err =>{console.log(err)})

      }}>
        <input 
        name="username"
        type="text"
        placeholder="username"
        value={LoginForm.username}
        onChange={e=>{
          setLoginForm({
            ...LoginForm,
            [e.target.name]:e.target.value
          })
        }}
        />
        <input
        name="password"
        type="password"
        placeholder="Password"
        value={LoginForm.password}
        onChange={e=>{
          setLoginForm({
            ...LoginForm,
            [e.target.name]:e.target.value
          })
        }}
        />
        <button type='submit'>Login!</button>
        </form>
    </>
  );
};

export default Login;
