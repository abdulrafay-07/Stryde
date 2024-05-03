import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { workoutData } from '../index';
import appwriteService from '../../appwrite/config';
import { LoadingState } from '../index';

const WorkoutSplit = () => {
    const [loading, setLoading] = useState(true);
    const [workoutDaysPerWeek, setWorkoutDaysPerWeek] = useState(null);
    const [selectedSplit, setSelectedSplit] = useState(null);

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        const showWorkouts = async () => {
            if (userData) {
                try {
                    const userPrefDoc = await appwriteService.getUserPreference(userData.$id);

                    if (userPrefDoc.total > 0) {
                        const { workoutDaysPerWeek } = userPrefDoc.documents[0];
                        setWorkoutDaysPerWeek(workoutDaysPerWeek);

                        const selectedSplit = workoutData[workoutDaysPerWeek];

                        setSelectedSplit(selectedSplit);
                    }
                } catch (error) {
                    console.log('Error fetching data:', error);
                } finally {
                    setLoading(false);
                }
            }
        }

        showWorkouts();
    }, [])

    return !loading ? (
        selectedSplit ? (
            <div className='flex flex-col gap-4 md:gap-8 lg:gap-10 px-20'>

                <h1 className='text-2xl font-bold text-center duration-300'>{workoutDaysPerWeek}-Day Split!</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>

                    {Object.keys(selectedSplit).map((splitKey, index) => (
                        <div 
                            key={index}
                            className='space-y-2 p-2 md:p-4 dark:bg-neutral-800 bg-gray-200 rounded-xl duration-300'
                        >
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
                    ))}
                    
                </div>

            </div>
        ) : <h1 className='h-screen flex justify-center items-center text-2xl'>No workout split available</h1>
    ) : <div className='h-screen flex justify-center items-center'><LoadingState /></div>
}

export default WorkoutSplit;