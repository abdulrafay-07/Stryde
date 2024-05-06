import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoadingState } from '../components/index';

const SingleExercises = () => {
    const [exercise, setExercise] = useState([]);
    const [loading, setLoading] = useState(true);

    const { name } = useParams();

    const data = useSelector(state => state.exercise.exerciseData);
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            const filteredData = data.filter(data => data.name === name);
            
            if (filteredData.length === 0) {
                navigate('/');
                return;
            }

            setExercise(filteredData[0]);
            setLoading(false);
        }
    }, [])

    return !loading ? (
        <div className='h-screen max-w-5xl mx-auto py-40 pl-20 pr-4 md:pl-28 md:pr-8'>
            <div className='flex justify-center gap-16 h-full dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 font-primary duration-300'>
                <div className='flex flex-col gap-4 xl:gap-6'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{exercise.name}</h1>
                    <span className='lg:ml-2'>Targeted Muscle: {exercise.muscle}, difficulty {exercise.difficulty}</span>
                    <p className='lg:w-2/3 lg:ml-2'>
                        {exercise.instructions}
                    </p>
                </div>
            </div>
        </div>
    ) : 
    <div className='flex items-center justify-center text-2xl md:text-4xl h-screen'>
        <LoadingState />
    </div>
}

export default SingleExercises;