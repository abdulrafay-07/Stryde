import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CreatePost, PostCategories, Posts } from '../components/index';

const Forums = () => {
    // show and hide create post button
    const [showCreate, setShowCreate] = useState(false);

    const userData = useSelector((state) => state.auth.userData);

    if (!userData) {
        return null;
    }

    const toggleCreatePost = () => {
        setShowCreate(!showCreate);
    }

    return (
        <div className='h-full min-h-screen dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 font-primary duration-300 pl-20 lg:px-28 lg:pr-16 py-20'>
            <div className='flex flex-col px-4 lg:px-0 lg:flex-row gap-x-20'>
                <div className='flex flex-col space-y-4 flex-grow'>
                    <div>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl md:text-3xl lg:text-5xl font-mono mb-2'>
                                Hello {userData.name}
                            </h1>
                            <button
                                onClick={toggleCreatePost}
                                className='hidden sm:flex px-4 py-2 rounded-2xl hover:rounded-md bg-purple-600 hover:bg-purple-700 ease-in duration-150 text-white h-10'
                            >
                                {showCreate ? "Hide" : "Create a post"}
                            </button>
                        </div>
                        <p className='dark:text-gray-300 opacity-80 text-neutral-800'>What's new with you? Inspire the community by sharing your achievements, goals, or some tips.</p>
                        <button
                            onClick={toggleCreatePost}
                            className='sm:hidden my-2 flex px-4 py-2 rounded-2xl hover:rounded-md bg-purple-600 hover:bg-purple-700 ease-in duration-150 text-white w-full justify-center'
                        >
                            {showCreate ? "Hide" : "Create a post"}
                        </button>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showCreate ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        {showCreate && <CreatePost />}
                    </div>
                    <div className='lg:hidden'>
                        <PostCategories />
                    </div>
                    <Posts />
                </div>
                <div className='hidden lg:block min-h-screen'>
                    <PostCategories />
                </div>
            </div>
        </div>
    )
}

export default Forums;