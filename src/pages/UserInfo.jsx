import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Button, Input, LoadingState } from '../components/index';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import conf from '../conf/conf';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const UserInfo = () => {
    const [loading, setLoading] = useState(true);
    const [userDoc, setUserDoc] = useState([]);
    const [imageId, setImageId] = useState('');

    const { register, handleSubmit } = useForm();

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

    const notify = () => {
        toast('Profile Picture Updated!', {
            position: 'top-right',
            theme: 'dark',
            autoClose: 1000,
        });
    }

    const uploadFile = async (data) => {
        const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

        if (file && imageId != conf.appwriteDefaultImageID) {
            await appwriteService.deleteFile(imageId);
        }

        const updateUserInfo = await appwriteService.updateUserInformation(userDoc.$id, {profilePicId: file ?file.$id : undefined});


        if (updateUserInfo) {
            setImageId(file ? file.$id : '');

            notify();
        }
    }

    return !loading ? (
        <div className='h-full min-h-screen pl-20 pr-4 lg:px-28 py-20 font-primary'>
            <div className='flex flex-col gap-y-4 lg:gap-y-6'>
                <div className='flex flex-col md:flex-row justify-between xl:w-1/2 border-2 rounded-md border-neutral-900 dark:border-white p-4 md:py-6 md:px-10'>
                    <div className='flex justify-center'>
                        <img 
                            src={appwriteService.getFilePreview(imageId)} 
                            className='aspect-square object-cover w-24 md:w-36 lg:w-48 rounded-full border border-neutral-900 dark:border-white p-3 mb-6 md:mb-0'
                        />
                    </div>
                    <form onSubmit={handleSubmit(uploadFile)} className='flex flex-col gap-4 md:w-1/2 justify-center'>
                        <Input
                            label='Upload Image'
                            type='file'
                            className='border-neutral-900 dark:border-white'
                            accept='image/png, image/jpg, image/jpeg,'
                            {...register('image', {
                                required: true
                            })}
                        />
                        <Button className='bg-purple-700 hover:bg-purple-500 ease-in duration-150 text-white'>
                            Save
                        </Button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    ) : <div className='flex items-center justify-center h-screen'><LoadingState /></div>
}

export default UserInfo;