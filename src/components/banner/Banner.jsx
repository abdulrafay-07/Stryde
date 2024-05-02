import React from 'react';

const Banner = ({ userData }) => {
    if (!userData) {
        return null;
    }

    return (
        <div className='flex px-24 md:px-28 py-32 h-[50vh]'>
            <h1 className='text-2xl md:text-3xl xl:text-6xl font-bold md:flex md:justify-center md:items-center w-full'>
                Welcome to &nbsp;
                <span className='text-purple-700 text-4xl md:text-4xl xl:text-7xl block md:inline-flex font-logo'>Stryde
                    <span className='dark:text-white text-neutral-900 font-primary text-2xl md:text-3xl xl:text-6xl md:inline-flex md:items-end lg:items-center duration-300'>, {userData.name}!</span>
                </span>
            </h1>
        </div>
    )
}

export default Banner;