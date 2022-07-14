import React from 'react';
import './SignIn.css';
import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignIn = () => {
    const [loaded, setLoaded]= useState();


const authenticateUser = async () => {
   const res = await fetch('localhost:9000/login', {
        method: 'POST',
        body: {
            name: 'User1'
        }
    })
    const data = await res.json()
}


  return (
    <div className='signin'>
        <div className='loginBox'>
            <h1>Login</h1>
            <form action="/login" method="POST">
                <div className='name'>
                    <input type="text" id="name" name="name" placeholder='Name...' required />
                </div>
                <div className='password'>
                    <input type="text" id="password" name="password" placeholder='Password...' required />
                </div>
                <button type="submit" className='loginBtn'>Login</button>
            </form>
            <div>
                <a href="/" className='registerlink'>Register Now</a>
            </div>
        </div>
    </div>
  )
}

export default SignIn