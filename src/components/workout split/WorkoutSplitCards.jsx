import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import appwriteService from '../../appwrite/config';
import useHandleClick from '../../hooks/useHandleClick';

const WorkoutSplitCards = ({ selectedSplit }) => {
    const [savedWorkouts, setSavedWorkouts] = useState([]);

    const userData = useSelector((state) => state.auth.userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    useEffect(() => {
        getSavedWorkouts();
    }, [])

    const editWorkout = async (title, workoutDaysPerWeek) => {
        if (userData) {
            const filteredWorkout = savedWorkouts.filter((workout) => workout.workoutTitle === title);
            
            if (filteredWorkout.length > 0) {
                const documentId = filteredWorkout[0].$id;
                await appwriteService.deleteSavedWorkout(documentId);
            } else {
                const workoutDB = await appwriteService.createSavedWorkout({userId: userData.$id, workoutTitle: title, workoutDaysPerWeek});
            }

            getSavedWorkouts();
        }
    }

    const isWorkoutSaved = (title, days) => {
        return savedWorkouts.some(
            savedWorkout => savedWorkout.workoutTitle === title &&
            savedWorkout.workoutDaysPerWeek === days
        );
    };

    const handleClick = useHandleClick(dispatch, navigate);

    const handleWorkoutData = (data) => {
        handleClick(data);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>
            {Object.keys(selectedSplit).map((splitKey, index) => (
                <div 
                    key={index}
                    className='space-y-2 p-2 md:p-4 dark:bg-neutral-800 bg-gray-200 rounded-xl duration-300 cursor-pointer'
                >
                    <div className='flex justify-between'>
                        <div onClick={() => handleWorkoutData(selectedSplit[splitKey])}>
                            <h1>
                                <span className='font-bold'>Split Name:</span> {selectedSplit[splitKey].title}
                            </h1>
                            <h1>
                                <span className='font-bold'>Muscles Focused:</span> {selectedSplit[splitKey].musclesFocused}
                            </h1>
    
                            <div className='space-y-1'>
                                <h1 className='font-bold mb-2'>Days:</h1>
                                {Object.keys(selectedSplit[splitKey]).map((dayKey) => {
                                    if (dayKey !== 'title' && dayKey !== 'musclesFocused') {
                                        const day = selectedSplit[splitKey][dayKey];
                                        return (
                                            <div key={dayKey}>
                                                <h2>{day.title}</h2>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                        
                        <button className='flex items-end text-purple-500' 
                            onClick={() => editWorkout(selectedSplit[splitKey].title, selectedSplit[splitKey].workoutDaysPerWeek)}
                        >
                            {isWorkoutSaved(selectedSplit[splitKey].title, selectedSplit[splitKey].workoutDaysPerWeek) ? <FaHeart className='text-xl' /> : <CiHeart className='text-2xl' />}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkoutSplitCards;