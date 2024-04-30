import React, { useState, useEffect } from 'react';
import appwriteService from '../../appwrite/config';

const Banner = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        appwriteService.getCurrentUser()
            .then(userData => setUser(userData.name))
            .finally(() => setLoading(false));
    }, [])

    return !loading ? (
        <div className='flex px-24 md:px-28 py-32 h-[50vh]'>
            <h1 className='text-2xl md:text-3xl xl:text-6xl font-bold md:flex md:justify-center md:items-center w-full'>
                Welcome to &nbsp;
                <span className='text-purple-700 text-4xl md:text-4xl xl:text-7xl block md:inline-flex font-logo'>Stryde
                    <span className='text-white font-primary text-2xl md:text-3xl xl:text-6xl md:inline-flex md:items-end lg:items-center'>, {user}!</span>
                </span>
            </h1>
        </div>
    ) : <h1 className='flex items-center justify-center text-2xl md:text-4xl h-screen'>Loading...</h1>
}

export default Banner;