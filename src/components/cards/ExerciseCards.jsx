import React from 'react';

const ExerciseCards = ({data}) => {
    return (
        <div className='flex flex-col gap-3 p-4 dark:bg-neutral-800 bg-gray-200 rounded-xl duration-300'>
            <h1 className='font-semibold xl:text-xl'>Name: <span className='font-normal'>{data.name}</span></h1>
            <h1 className='font-semibold xl:text-xl'>Difficulty: <span className='font-normal'>{data.difficulty}</span></h1>
            <h1 className='font-semibold xl:text-xl'>Muscle Targeted: <span className='font-normal'>{data.muscle}</span></h1>
        </div>
    )
}

export default ExerciseCards;