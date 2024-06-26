import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-col justify-center items-center pl-12 md:pl-0 text-gray-400'>
                <img
                    src='/error.png'
                    className='w-full'
                />
                <h1 className='text-2xl -mt-16'>
                    Unexpected error occurred
                </h1>
                <Link to='/' className='text-gray-700'>
                    Go to homepage
                </Link>
            </div>
        </div>
    )
}

export default Error;