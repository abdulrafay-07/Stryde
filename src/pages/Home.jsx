import React from 'react';
import { Login } from './index';
import { Banner, SavedCards } from '../components/index';
import { useSelector } from 'react-redux';

const Home = () => {
    const isAuthenticated = useSelector(state => state.auth.status);

    return isAuthenticated ? (
        <div className='font-primary h-full'>
            <div className='flex flex-col'>
                <Banner />
                <SavedCards />
            </div>
        </div>
    ) : (
        <div>
            <Login />
        </div>
    )
}

export default Home;