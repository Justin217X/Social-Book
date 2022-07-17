import React from 'react';
import './SignIn.css';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './context/AuthProvider';

import axios from './api/axios';
const LOGIN_URL = '/auth';

const SignIn = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response))
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                console.log(err)
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    } 

  return (
    <>
        {success ? (
            <div>
                <h1>You are logged in!</h1>
                <p>
                    <a href='/SocialBook'>Go To Home</a>
                </p>
            </div>
        ) : (
            <div className='signin'>
                <div className='loginBox'>
                    <h1>Login</h1>
                    <p ref={errRef} className={errMsg ? "errmsg" : "hide"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit}>
                        <div className='name'>
                            <label htmlFor='username'>Username:</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="name" 
                                placeholder='Name...' 
                                ref={userRef}
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required 
                            />
                        </div>
                        <div className='password'>
                        <label htmlFor='password'>Password:</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder='Password...' 
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required 
                            />
                        </div>
                        <button type="submit" className='loginBtn'>Login</button>
                    </form>
                    <div>
                        <a href="/" className='registerlink'>Register Now</a>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default SignIn