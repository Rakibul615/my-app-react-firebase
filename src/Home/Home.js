import React from 'react';
import useAuth from '../hooks/useAuth';

const Home = () => {
    const {user}=useAuth();
    return (
        <div>
            <h1>Name: {user.displayName}</h1>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Home;