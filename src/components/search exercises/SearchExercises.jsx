import React, { useState } from 'react';
import { Button, Input } from '../index';

const SearchExercises = ({ searchText }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className='max-w-sm rounded my-10 mx-auto'>
            <form onSubmit={handleSubmit} className='w-full max-w-sm'>
                <div className='flex items-end border-b border-purple-700 py-2'>
                    <Input
                        label='Search Exercises'
                        placeholder='e.g. Biceps'
                        className='appearance-none border-none dark:bg-transparent bg-transparent w-full text-neutral-900 dark:text-white duration-300 mr-3 leading-tight focus:outline-none focus:bg-transparent focus:border-purple-700'
                        onChange={e => setText(e.target.value)}
                    />
                    <Button type='submit'
                        className='bg-purple-700 hover:bg-purple-500 ease-in duration-150 text-white flex-shrink-0 border-purple-700 text-sm'
                    >
                        Search
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SearchExercises;