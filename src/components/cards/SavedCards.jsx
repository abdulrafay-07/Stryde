import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { workoutData } from '../index';
import appwriteService from '../../appwrite/config';

const SavedCards = () => {
    const [savedWorkouts, setSavedWorkouts] = useState([]);
    const [filteredSavedWorkouts, setFilteredSavedWorkouts] = useState([]);

    const userData = useSelector((state) => state.auth.userData);
    
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

    return (
        <div className='flex justify-center items-start px-24 md:px-28 h-full'>
            <div className='flex flex-wrap gap-6 lg:gap-8'>
                {filteredSavedWorkouts && filteredSavedWorkouts.length > 0 ? (
                    filteredSavedWorkouts.map((workout, index) => (
                        <div key={index} 
                            className='space-y-2 p-2 md:p-4 dark:bg-neutral-800 bg-gray-200 rounded-xl duration-300'
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
                    <div>No saved workouts found.</div>
                )}
            </div>
        </div>
    )
}

export default SavedCards;