import React from 'react';
import appwriteService from '../../appwrite/config';
import { Button, Input } from '../index';
import { useForm } from 'react-hook-form';
import conf from '../../conf/conf';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const ProfilePic = ({ userDoc, imageId, setImageId }) => {
    const { register, handleSubmit } = useForm();

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

    return (
        <div className='flex flex-col md:flex-row justify-center md:gap-8 p-4 md:py-6 md:px-10 border-2 rounded-md border-neutral-900 dark:border-white'>
            <div className='flex justify-center'>
                <img 
                    src={appwriteService.getFilePreview(imageId)} 
                    className='aspect-square object-cover w-24 md:w-36 lg:w-48 rounded-full border-2 border-neutral-900 dark:border-white mb-6 md:mb-0'
                />
            </div>
            <form onSubmit={handleSubmit(uploadFile)} className='flex flex-col gap-4 md:w-1/2 xl:w-1/4 justify-center'>
                <Input
                    label='Upload Image'
                    type='file'
                    className='border-none text-neutral-900 cursor-pointer'
                    accept='image/png, image/jpg, image/jpeg,'
                    {...register('image', {
                        required: true
                    })}
                />
                <Button type='submit' className='bg-purple-700 hover:bg-purple-500 ease-in duration-150 text-white'>
                    Upload
                </Button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default ProfilePic;