import React, { useState, useEffect } from 'react';
import conf from '../conf/conf';
import { SearchExercises, ExerciseCards } from '../components/index';

const Search = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
        const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${term}`;

        const fetchExercises = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': conf.exercisesApiKey,
                        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
                    }
                })
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.log('X-RapidAPI :: fetchExercises :: error', error);
            }
        }

        fetchExercises();
    }, [term])

    const handleSearch = (text) => {
        setLoading(true);
        setTerm(text);
    }

    return (
        <div className='dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 font-primary duration-300'>
            <div className='flex flex-col h-full justify-stretch py-28 items-center gap-20'>
                <div className='w-2/3 ml-10 md:ml-0 md:w-full'>
                    <SearchExercises searchText={handleSearch} />
                    {
                        loading && data.length === 0 && term !== '' && 
                        <h1>No Exercises Found.</h1>
                    }
                </div>
                {
                    !loading ?
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ml-10 md:ml-0 gap-4 lg:gap-6 h-full px-10 md:px-32'>
                        {
                            data.map((data, index) => (
                                <div key={index}>
                                    <ExerciseCards data={data} />
                                </div>
                            ))
                        }
                    </div>
                    : 
                    <h1 className='flex justify-center text-2xl md:text-4xl h-screen'>
                        Loading...
                    </h1>
                }
            </div>
        </div>
    )
}

export default Search;