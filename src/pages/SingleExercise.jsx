import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleExercises = () => {
    const [exercise, setExercise] = useState([]);
    const [loading, setLoading] = useState(true);

    const { name } = useParams();

    const data = useSelector(state => state.exercise.data);

    useEffect(() => {
        if (data) {
            const filteredData = data.filter(data => data.name === name);

            setExercise(filteredData[0]);
            setLoading(false);
        }
    }, [])

    return !loading ? (
        <div className='h-screen dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 font-primary duration-300'>
            <div className='flex flex-col lg:flex-row items-start lg:justify-between p-20 md:px-28 lg:px-36 gap-16 h-full'>
                <div className='flex flex-col gap-4 xl:gap-6'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{exercise.name}</h1>
                    <span className='lg:ml-2'>Targeted Muscle: {exercise.muscle}, difficulty {exercise.difficulty}</span>
                    <p className='lg:w-2/3 lg:ml-2'>
                        {exercise.instructions}
                    </p>
                </div>
                <div>
                    {/* more exercises cards */}
                </div>
            </div>
        </div>
    ) : <h1 className='flex items-center justify-center text-2xl md:text-4xl h-screen'>Loading...</h1>
}

export default SingleExercises;