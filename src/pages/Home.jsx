import React, { useEffect, useState } from 'react';
import { Login } from './index';
import { Banner, SavedCards, LoadingState } from '../components/index';
import { useSelector } from 'react-redux';
import appwriteService from '../appwrite/config';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);

    const isAuthenticated = useSelector(state => state.auth.status);

    useEffect(() => {
        if (isAuthenticated) {
            appwriteService.getCurrentUser()
                .then(userData => {
                    setUserData(userData);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                    setLoading(false);
                });
        }
    }, [isAuthenticated])

    return isAuthenticated ? (
        <div className='font-primary h-full'>
            {
                !loading ? (
                    <div className='flex flex-col'>
                        <Banner userData={userData} />
                        <SavedCards />
                    </div>
                ) : 
                <div className='flex items-center justify-center h-screen'><LoadingState /></div>
            }
        </div>
    ) : (
        <div>
            <Login />
        </div>
    )
}

export default Home;