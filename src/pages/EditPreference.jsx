import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { UserPreference, LoadingState } from '../components/index';
import { useSelector } from 'react-redux';

const EditPreference = () => {
    const [userPref, setUserPref] = useState([]);
    const [loading, setLoading] = useState(true);

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (userData) {
            appwriteService.getUserPreference(userData.$id)
                .then(pref => {
                    setUserPref(pref.documents[0]);
                })
                .finally(() => setLoading(false));
        }
    }, [])

    return !loading ? (
        <div className='h-full min-h-screen'>
            <div className='flex justify-center py-20'>
                <UserPreference userPref={userPref} />
            </div>
        </div>
    ) : 
    <div className='flex items-center justify-center text-2xl md:text-4xl h-screen'>
        <LoadingState />
    </div>
}

export default EditPreference;