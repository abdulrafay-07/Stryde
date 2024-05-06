import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import workoutData from '../../utils/workoutRegime';
import appwriteService from '../../appwrite/config';
import { Link, useNavigate } from 'react-router-dom';
import useHandleClick from '../../hooks/useHandleClick';

const SavedCards = () => {
    const [savedWorkouts, setSavedWorkouts] = useState([]);
    const [filteredSavedWorkouts, setFilteredSavedWorkouts] = useState([]);

    const userData = useSelector((state) => state.auth.userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        getSavedWorkouts();
    }, [])

    useEffect(() => {
        if (savedWorkouts.length > 0) {
            const filtered = filteredWorkouts();
            setFilteredSavedWorkouts(filtered);
        }
    }, [savedWorkouts]);

    const getSavedWorkouts = async () => {
        if (userData) {
            try {
                const savedWorkoutsData = await appwriteService.getSavedWorkouts(userData.$id);
                setSavedWorkouts(savedWorkoutsData.documents);
            } catch (error) {
                console.log('Error fetching saved workouts data:', error);
            }
        }
    }

    const filteredWorkouts = () => {
        const filtered = [];

        //for each days per week
        Object.values(workoutData).forEach((workoutPerWeek) => {
            //for each split
            Object.values(workoutPerWeek).forEach((split) => {
                const matchingWorkout = savedWorkouts.find(
                    savedWorkout => savedWorkout.workoutTitle === split.title &&
                    savedWorkout.workoutDaysPerWeek === split.workoutDaysPerWeek
                )
                if (matchingWorkout) {
                    filtered.push(split);
                }
            })
        })

        return filtered;
    }

    const handleClick = useHandleClick(dispatch, navigate);

    const handleWorkoutData = (data) => {
        handleClick(data);
    }

    return (
        <div className='flex flex-col gap-4 md:gap-6 lg:gap-8 justify-start items-center px-24 md:px-28 h-full'>
            <h1 className='text-xl md:text-4xl font-bold'>Saved Workouts</h1>
            <div className='flex flex-wrap gap-6 lg:gap-8'>
                {filteredSavedWorkouts && filteredSavedWorkouts.length > 0 ? (
                    filteredSavedWorkouts.map((workout, index) => (
                        <div key={index} 
                            className='space-y-2 p-2 md:p-4 dark:bg-neutral-800 bg-gray-200 rounded-xl duration-300 cursor-pointer'
                            onClick={() => handleWorkoutData(workout)}
                        >
                            <div>
                                <h1>
                                    <span className='font-bold'>Split Name:</span> {workout.title}
                                </h1>
                                <h1>
                                    <span className='font-bold'>Muscles Focused:</span> {workout.musclesFocused}
                                </h1>
        
                                <div className='space-y-1'>
                                    <h1 className='font-bold mb-2'>Days:</h1>
                                    {Object.values(workout).map((day, index) => (
                                        <div key={index}>
                                            {day.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='text-center'>
                        No saved workouts found, <Link to='/browse' className='font-semibold text-purple-500 hover:text-purple-400 duration-150'>Browse</Link> to save workouts.
                    </div>
                )}
            </div>
        </div>
    )
}

export default SavedCards;