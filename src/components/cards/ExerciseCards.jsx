import React from 'react';

const ExerciseCards = ({data}) => {
    const truncateInstructions = (instructions, maxLength) => {
        if (instructions.length <= maxLength) {
            return instructions;
        } else {
            let truncated = instructions.slice(0, maxLength);

            while (truncated.replace(/[^\x00-\xff]/g, "**").length > maxLength) {
                truncated = truncated.slice(0, -1);
            }
            return `${truncated}...`;
        }
    };

    return (
        <div className='flex flex-col gap-3 p-4 dark:bg-neutral-800 bg-gray-200 rounded-xl duration-300'>
            <h1 className='font-semibold xl:text-xl'>
                Name: <span className='font-normal'>{data.name}</span>
            </h1>
            <h1 className='font-semibold xl:text-xl'>
                Difficulty: <span className='font-normal'>{data.difficulty}</span>
            </h1>
            <h1 className='font-semibold xl:text-xl'>
                Targeted Muscle: <span className='font-normal'>{data.muscle}</span>
            </h1>
            <h1 className='font-semibold xl:text-xl'>
                Instructions: <span className='font-normal'>{truncateInstructions(data.instructions, 30)}</span>
            </h1>
        </div>
    )
}

export default ExerciseCards;