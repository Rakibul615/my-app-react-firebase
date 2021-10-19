import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const Login = () => {
    const {signInUsingGoogle,signInUsingGitHub}=useAuth();
   
    return (
        <div>           
                <h1>please login</h1>
                <button onClick={signInUsingGoogle}>Google Sign In</button> <br />
                <button onClick={signInUsingGitHub}>Github Sign In</button> <br />
                <Link to="/register">New User?</Link>           
            
        </div>
    );
};

export default Login;