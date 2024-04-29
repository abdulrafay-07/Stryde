import React from 'react';
import { Login } from './index';
import { useSelector } from 'react-redux';

const Home = () => {
    const isAuthenticated = useSelector(state => state.auth.status);

    return isAuthenticated ? (
        <div className='font-primary h-screen'>
            Home
        </div>
    ) : (
        <div>
            <Login />
        </div>
    )
}

export default Home;