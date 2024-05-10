import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfilePic, ProfileCredentials, LoadingState } from '../components/index';
import appwriteService from '../appwrite/config';

const UserInfo = () => {
    const [loading, setLoading] = useState(true);
    const [userDoc, setUserDoc] = useState([]);
    const [imageId, setImageId] = useState('');

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        const getImage = async () => {
            if (userData) {
                const userInfoDB = await appwriteService.getUserInformation(userData.$id);

                setUserDoc(userInfoDB.documents[0]);
                setImageId(userInfoDB.documents[0].profilePicId);

                setLoading(false);
            }
        }

        getImage();
    }, [])

    return !loading ? (
        <div className='h-full min-h-screen pl-20 pr-4 lg:px-28 py-20 font-primary'>
            <div className='flex flex-col gap-y-4 lg:gap-y-6'>
                <ProfilePic 
                    userDoc={userDoc} imageId={imageId} setImageId={setImageId}
                />
                <ProfileCredentials />
            </div>
        </div>
    ) : <div className='flex items-center justify-center h-screen'><LoadingState /></div>
}

export default UserInfo;