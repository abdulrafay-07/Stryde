import React, { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Select, Button } from '../index';
import { CiImageOn } from 'react-icons/ci';
import { PiCursorClick } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appwriteService from '../../appwrite/config';

const CreatePost = () => {
    const { register, handleSubmit, setValue, watch } = useForm();

    const fileInputRef = useRef(null);

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const submit = async (data) => {
        let file;
        const image = data.image[0];

        const detail = await appwriteService.getUserInformation(userData.$id);
        const profilePicId = detail.documents[0].profilePicId;

        if (image) {
            file = await appwriteService.uploadForumImageFile(image);
        }

        if (file && userData) {
            const fileId = fild.$id;
            data.imageId = fileId;

            const postDB = await appwriteService.createForum({...data, userId: userData.$id, profilePicId, name: userData.name});

            if (postDB) {
                navigate("/");
            }
        } else if (!file && userData) {
            const postDB = await appwriteService.createForum({...data, userId: userData.$id, profilePicId, name: userData.name});

            if (postDB) {
                navigate("/");
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d]+/g, "-");
        }
        return "";
    }, [])

    useEffect(() => {
        const subscription = watch((value, {name}) => {
            if (name === 'title') {
                setValue("slug", slugTransform(value.title, {
                    shouldValidate: true,
                }))
            }
        })
    }, [watch, slugTransform, setValue])

    return (
        <div className='px-5 py-4 dark:bg-neutral-800 bg-gray-200 rounded-xl duration-300 flex flex-col space-y-4'>
            <h1 className='text-xl lg:text-2xl font-mono text-center md:text-start'>Create post</h1>
            <form onSubmit={handleSubmit(submit)} className='flex flex-col space-y-2'>
                <div className='mx-2 lg:px-3 lg:py-2 space-y-2'>
                    <Input
                        placeholder='Title: e.g., What is powerlifting?'
                        className='dark:bg-neutral-700 dark:text-gray-200 border-none dark:placeholder:text-gray-200 placeholder:text-neutral-700 text-neutral-700 bg-gray-100 rounded-md'
                        {...register('title', {
                            required: true,
                        })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), {
                                shouldValidate: true,
                            })
                        }}
                    />
                    <Input
                        className='hidden'
                        {...register('slug', {
                            required: true,
                        })}
                    />
                    <textarea
                        rows={4}
                        placeholder='Content: e.g., So this is a basic guide or introduction to powerlifting with some tips. Powerlifting is a competition for strength...'
                        className='px-3 py-2 rounded-lg dark:bg-neutral-700 border-none dark:placeholder:text-gray-200 dark:text-gray-200 placeholder:text-neutral-700 text-neutral-700 bg-gray-100 w-full resize-none outline-none focus:bg-gray-50'
                        {...register('content', {
                            required: true,
                        })}
                    />
                </div>
                <div className='flex flex-col lg:flex-row mx-2'>
                    <div className='flex flex-col lg:flex-row gap-y-4 lg:gap-x-24 lg:flex-grow lg:justify-start'>
                        <div>
                            <input type='file' ref={fileInputRef} className='hidden' />
                            <button
                                type='button'
                                onClick={handleClick}
                                className='px-4 py-2 rounded-2xl hover:rounded-md bg-purple-600 hover:bg-purple-700 ease-in duration-150 text-white flex items-center justify-center gap-x-1 w-full'
                                {...register("image")}
                            >
                                <CiImageOn className='text-xl' /> Image
                            </button>
                        </div>
                        <div>
                            <Select
                                options={['Tips', 'Diet', 'Competitions', 'Powerlifting', 'Bodybuilding', 'Workout Splits']}
                                label='Categories'
                                className='w-full text-center mb-3 lg:mb-0'
                                {...register('category', {
                                    required: true,
                                })}
                            />
                        </div>
                    </div>
                    <Button
                        type='submit'
                        className='rounded-2xl hover:rounded-md bg-purple-600 hover:bg-purple-700 ease-in duration-150 text-white flex items-center justify-center w-full lg:w-auto'
                    >
                        <PiCursorClick className='mr-1' />Post
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;