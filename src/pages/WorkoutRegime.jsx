import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LoadingState } from '../components/index';
import { useNavigate } from 'react-router-dom';

const WorkoutRegime = () => {
    const [regime, setRegime] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const regimeData = useSelector((state) => state.regime.regimeData);

    useEffect(() => {
        if (regimeData) {
            setRegime(regimeData);
            setLoading(false);
        } else {
            navigate('/');
        }
    }, [])

    return !loading && regime ? (
        <div className='h-full md:max-w-2xl lg:max-w-4xl mx-auto min-h-screen flex py-20 pl-20 pr-6 pr md:px-24 lg:px-32 xl:px-36 font-primary'>
            <div className='flex flex-col gap-4 xl:gap-6'>
                <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
                    {regime.title} - <span className='text-2xl md:text-3xl font-logo'>{regime.musclesFocused}</span>
                </h1>
                {
                    Object.keys(regime)
                    .filter(dayKey => dayKey.startsWith('day'))
                    .map((dayKey, index) => (
                        <div key={index} className='flex flex-col gap-4'>
                            <h1 className='font-semibold text-2xl'>
                                {`Day ${index + 1} (${regime[dayKey].title}):`}
                            </h1>
                            {
                                regime[dayKey].exercises.map((exercise, i) => (
                                    <div key={i}>
                                        <p className='font-xl ml-3'>
                                            {`Exercise ${i + 1}: ${exercise.name} (${exercise.sets} sets, rep range: ${exercise.reps})`}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    ) :
    <div className='flex items-center justify-center text-2xl md:text-4xl h-screen'>
        <LoadingState />
    </div>
}

export default WorkoutRegime;