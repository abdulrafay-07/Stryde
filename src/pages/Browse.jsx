import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { useSelector } from 'react-redux';
import { UserPreference, LoadingState, WorkoutSplit } from '../components/index';

const Browse = () => {
    const [loading, setLoading] = useState(true);
    const [isUserPrefEmpty, setIsUserPrefEmpty] = useState(true);

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        const checkUserPreference = async () => {
            if (userData) {
                try {
                    const doc = await appwriteService.getUserPreference(userData.$id);

                    if (doc.total > 0) {
                        // console.log(doc);
                        setIsUserPrefEmpty(false);
                        setLoading(false);
                    }
                } catch (error) {
                    console.log('Error fetching user preference data:', error);
                } finally {
                    setLoading(false);
                }
            }
        }

        checkUserPreference();
    }, [])

    return !loading ? (
        <div className='h-full min-h-screen dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 font-primary duration-300'>
            {
                isUserPrefEmpty ? (
                    <div className='flex justify-center py-20'>
                        <UserPreference setIsUserPrefEmpty={setIsUserPrefEmpty} />
                    </div>
                ) : (
                    <div className='flex justify-center py-20'>
                        <WorkoutSplit />
                    </div>
                )
            }
        </div>
    ) : <div className='flex items-center justify-center h-screen'><LoadingState /></div>
}

export default Browse;