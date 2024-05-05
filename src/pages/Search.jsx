import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import conf from '../conf/conf';
import { useDispatch } from 'react-redux';
import { fetchData } from '../store/exerciseSlice';
import { SearchExercises, ExerciseCards, LoadingState } from '../components/index';

const Search = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');

    const dispatch = useDispatch();

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

    const retrieveData = (data) => {
        dispatch(fetchData(data));
    }

    useEffect(() => {
        if (!loading && data.length === 0 && term !== '') {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [loading, data, term]);

    return (
        <div className='dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 font-primary duration-300 h-full min-h-screen'>
            <div className='flex flex-col h-full justify-stretch py-28 items-center gap-20'>
                <div className='w-2/3 ml-10 md:ml-0 md:w-full text-center'>
                    <SearchExercises searchText={handleSearch} />
                    {
                        !loading && data.length === 0 && term !== '' && 
                        <h1 className='h-screen'>No Exercises Found.</h1>
                    }
                </div>
                {
                    data.length > 0 && !loading ?
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ml-10 md:ml-0 gap-4 lg:gap-6 h-full px-10 md:px-32 dark:bg-neutral-900 dark:text-white bg-white text-neutral-900'>
                        {
                            data.map((data, index) => (
                                <Link to={`/search/${data.name}`} key={index} 
                                    onClick={() => retrieveData(data)}
                                >
                                    <ExerciseCards data={data} />
                                </Link>
                            ))
                        }
                    </div>
                    : 
                    <div className='h-screen'>
                        <LoadingState />
                    </div>
                }
            </div>
        </div>
    )
}

export default Search;