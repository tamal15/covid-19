import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
// import useFirebase from '../../../Hook/useFirebase';
import './Login.css'

const Login = () => {
    const{GoogleLogin}=useAuth()
    const location=useLocation()
    const history=useHistory()

    const redirect_uri=location.state?.from || '/home'
    const handleGoogle=()=>{
        GoogleLogin()
        .then(result=>{
            //  setUser(result.user);
            history.push(redirect_uri)
        })
    }
    return (
        <div className='mt-5 pt-5 background-designs stars '>
              <h2 className='text-2xl font-bold but'>Please Login</h2>

<button className="googles mt-5 pen " onClick={handleGoogle}>Google Signin</button>
        </div>
    );
};

export default Login;