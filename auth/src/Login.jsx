import React, {useRef, useState, useEffect, useContext} from 'react'
import useAuth from './hooks/useAuth';
import {Link, useNavigate, useLocation} from 'react-router-dom';

import axios from './api/axios';
const LOGIN_URL = '/login';


function Login() {
    const {setAuth} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || {pathname: '/'};


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
        console.log(user)
        // if button enabled with JS hack
        if (!user || !pwd) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            // const response = await axios.post(LOGIN_URL,
            //     JSON.stringify({ user, pwd }),
            //     {
            //         headers: { 'Content-Type': 'application/json' },
            //         withCredentials: true
            //     }
            // );
            // console.log(response?.data);
            // console.log(response?.accessToken);
            // console.log(JSON.stringify(response))
            const userData = { username: 'baljinder', token: '12345' };
            setAuth(userData);
            setSuccess(true);
            navigate(from, {replace: true});
            console.log("Login Successful");
        } catch (error) {
            console.error(error);
            if(!error.response) {
                setErrMsg("Network Error");
            } else if (error.response.status === 401) {
                setErrMsg("Invalid Credentials");
            } else if (error.response.status === 400) {
                setErrMsg("missing cred");
            }else {
                setErrMsg("Server Error");
            }
    }
    }
  return (
    <>
    {success ? (<p>Login Successful</p>) :(
        <div>
    <p ref={errRef} className={errMsg ? "errmsg" : 
        "offscreen"} aria-live="assertive">{errMsg}</p>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={userRef}
        autoComplete="off" onChange={(e) => setUser(e.target.value)}
        value={user} 
        required
        />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" 
        onChange={(e) => setPwd(e.target.value)}
        value={pwd} required
        />
        <button type="submit">Login</button>
    </form>
        <p>
        Need an account? <a href="#">Register</a>
        </p>
        </div>
    )}
    </>
  )

}


export default Login