import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { useSelector } from 'react-redux';
import { UserPreference } from '../components/index';

const Browse = () => {
    const [loading, setLoading] = useState(true);
    const [isUserPrefEmpty, setIsUserPrefEmpty] = useState(true);

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        const checkUserPreference = async () => {
            if (userData) {
                const doc = await appwriteService.getUserPreference(userData.$id);

                if (doc.total > 0) {
                    // console.log(doc);
                    setIsUserPrefEmpty(false);
                    setLoading(false);
                } else {
                    setLoading(false);
                }
            }
        }

        checkUserPreference();
    }, [])

    return !loading ? (
        <div className='h-screen dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 font-primary duration-300'>
            {
                isUserPrefEmpty ? (
                    <div className='flex items-center justify-center h-full'>
                        <UserPreference />
                    </div>
                ) : (
                    <div className='flex items-center justify-center h-full'>
                        Stryde
                        {/* add workouts component */}
                    </div>
                )
            }
        </div>
    ) : <h1 className='flex items-center justify-center text-2xl md:text-4xl h-screen'>Loading...</h1>
}

export default Browse;