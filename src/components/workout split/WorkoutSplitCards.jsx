import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CiHeart } from 'react-icons/ci';
import appwriteService from '../../appwrite/config';

const WorkoutSplitCards = ({ selectedSplit }) => {
    const [savedWorkouts, setSavedWorkouts] = useState([]);

    const userData = useSelector((state) => state.auth.userData);

    const getSavedWorkouts = async () => {
        if (userData) {
            try {
                const savedWorkoutsData = await appwriteService.getSavedWorkouts(userData.$id);

                console.log(savedWorkoutsData.documents);

                setSavedWorkouts(savedWorkoutsData.documents);
            } catch (error) {
                console.log('Error fetching saved workouts data:', error);
            }
        }
    }

    useEffect(() => {
        getSavedWorkouts();
    }, [])

    const editWorkout = async (title) => {
        if (userData) {
            const filteredWorkout = savedWorkouts.filter((workout) => workout.workoutTitle === title);
            if (filteredWorkout.length > 0) {
                const documentId = filteredWorkout[0].$id;
                await appwriteService.deleteSavedWorkout(documentId);
            } else {
                const workoutDB = await appwriteService.createSavedWorkout({userId: userData.$id, workoutTitle: title});

                console.log(workoutDB);
            }

            getSavedWorkouts();
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>
            {Object.keys(selectedSplit).map((splitKey, index) => (
                <div 
                    key={index}
                    className='space-y-2 p-2 md:p-4 dark:bg-neutral-800 bg-gray-200 rounded-xl duration-300'
                >
                    <div className='flex justify-between'>
                        <div>
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
                        
                        <button className='flex items-end text-purple-500' onClick={() => editWorkout(selectedSplit[splitKey].title)}>
                            <CiHeart />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkoutSplitCards;