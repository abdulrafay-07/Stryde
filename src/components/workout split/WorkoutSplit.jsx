import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { WorkoutSplitCards } from '../index';
import { LoadingState } from '../index';
import workoutData from '../../utils/workoutRegime';
import appwriteService from '../../appwrite/config';

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
            <div className='flex flex-col gap-4 md:gap-8 lg:gap-10 pl-20 pr-4 md:pr-0'>
                <h1 className='text-2xl font-bold text-center duration-300'>{workoutDaysPerWeek}-Day Workout Splits</h1>

                <WorkoutSplitCards selectedSplit={selectedSplit} />
            </div>
        ) : <h1 className='h-screen flex justify-center items-center text-2xl'>No workout split available</h1>
    ) : <div className='h-screen flex justify-center items-center'><LoadingState /></div>
}

export default WorkoutSplit;