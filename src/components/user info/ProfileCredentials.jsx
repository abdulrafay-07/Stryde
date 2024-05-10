import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from '../index';
import { useSelector } from 'react-redux';
import appwriteService from '../../appwrite/config';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const ProfileCredentials = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [editingEmail, setEditingEmail] = useState(false);
    const [editingName, setEditingName] = useState(false);
    const [editingPassword, setEditingPassword] = useState(false);

    const { register, handleSubmit } = useForm();

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (userData) {
            setEmail(userData.email);
            setName(userData.name);
        }
    }, [])

    const notify = (answer) => {
        if (answer == 'email') {
            toast('Email Updated!', {
                position: 'top-right',
                theme: 'dark',
                autoClose: 1000,
            });
        } else if (answer == 'name') {
            toast('Name Updated!', {
                position: 'top-right',
                theme: 'dark',
                autoClose: 1000,
            });
        } else if (answer == 'password') {
            toast('Password Updated!', {
                position: 'top-right',
                theme: 'dark',
                autoClose: 1000,
            });
        }
    }

    const handleEditClick = (answer) => {
        switch (answer) {
            case 'email':
                setEditingEmail(true);
                setEditingName(false);
                setEditingPassword(false);
                break;
            case 'name':
                setEditingName(true);
                setEditingEmail(false);
                setEditingPassword(false);
                break;
            case 'password':
                setEditingPassword(true);
                setEditingEmail(false);
                setEditingName(false);
                break;
            default:
                break;
        }
    };

    const onSubmit = async (data) => {
        setError('');

        try {
            if (editingEmail) {
                const updateCreds = await appwriteService.updateEmail({...data});
                if (updateCreds) {
                    setEmail(updateCreds.email);
                    notify('email');
                }
                setEditingEmail(false);
            }
            if (editingName) {
                const updateCreds = await appwriteService.updateName({...data});
                if (updateCreds) {
                    setName(updateCreds.name);
                    notify('name');
                }
                setEditingName(false);
            }
            if (editingPassword) {
                const updateCreds = await appwriteService.updatePassword({newPassword: data.newPassword, oldPassword: data.oldPassword});
                notify('password');
                setEditingPassword(false);
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='flex flex-col xl:flex-row justify-between gap-4'>
            <div className='flex flex-col lg:flex-row gap-4 xl:w-1/2 justify-between border-2 rounded-md border-neutral-900 dark:border-white p-4 md:py-6 md:px-10'>
                <div className='flex flex-col gap-4 w-full justify-center'>
                    <div className='flex flex-col md:items-end md:flex-row md:justify-evenly gap-4 md:gap-x-28'>
                        <Input
                            label='Email:'
                            disabled
                            defaultValue={email}
                        />
                        <Button 
                            type='button'
                            className='bg-purple-700 hover:bg-purple-500 ease-in duration-150 text-white md:w-2/3 md:h-[42px]'
                            onClick={() => handleEditClick('email')}
                        >
                            Edit Email
                        </Button>
                    </div>
                    <div className='flex flex-col md:items-end md:flex-row md:justify-evenly gap-4 md:gap-x-28'>
                        <Input 
                            label='Name'
                            disabled
                            defaultValue={name}
                        />
                        <Button 
                            type='button'
                            className='bg-purple-700 hover:bg-purple-500 ease-in duration-150 text-white md:w-2/3 md:h-[42px]'
                            onClick={() => handleEditClick('name')}
                        >
                            Edit Name
                        </Button>
                    </div>
                    <div className='flex flex-col md:items-end md:flex-row md:justify-evenly gap-4 md:gap-x-28'>
                        <Input
                            label='Password'
                            type='password'
                            defaultValue='***********'
                            disabled
                        />
                        <Button 
                            type='button'
                            className='bg-purple-700 hover:bg-purple-500 ease-in duration-150 text-white md:w-2/3 md:h-[42px]'
                            onClick={() => handleEditClick('password')}
                        >
                            Edit Password
                        </Button>
                    </div>
                </div>
            </div>
            <div className='border-2 rounded-md border-neutral-900 dark:border-white xl:w-1/2 p-4 md:py-6 md:px-10'>
                <div className='flex flex-col items-center py-10 gap-4'>
                    {
                        error && 
                        <p className='text-red-600 mt-8 text-center'>{error}</p>
                    }
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {editingEmail ? (
                            <div className='space-y-4'>
                                <Input
                                    label='Email'
                                    placeholder='Enter new email'
                                    type='email'
                                    {...register('email', {
                                        required: true,
                                        validate: {
                                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address"
                                        }
                                    })}
                                />
                                <Input
                                    label='Password'
                                    placeholder='Enter your password'
                                    type='password'
                                    {...register('password', {
                                        required: true
                                    })}
                                />
                                <Button 
                                type='submit'
                                className='bg-purple-700 hover:bg-purple-500 ease-in duration-150 w-full text-white'
                                >
                                    Update Email
                                </Button>
                            </div>
                        ) : editingName ? (
                            <div className='space-y-4'>
                                <Input 
                                    label='Name'
                                    placeholder='Enter your name'
                                    {...register('name', {
                                        required: true
                                    })}
                                />
                                <Button 
                                    type='submit'
                                    className='bg-purple-700 hover:bg-purple-500 ease-in duration-150 w-full text-white'
                                    >
                                        Update Name
                                </Button>
                            </div>
                        ) : editingPassword ? (
                            <div className='space-y-4'>
                                <Input
                                    label='Old Password'
                                    placeholder='Enter your old password'
                                    type='password'
                                    {...register('oldPassword', {
                                        required: true
                                    })}
                                />
                                <Input
                                    label='New Password'
                                    placeholder='Enter your new password'
                                    type='password'
                                    {...register('newPassword', {
                                        required: true
                                    })}
                                />
                                <Button 
                                    type='submit'
                                    className='bg-purple-700 hover:bg-purple-500 ease-in duration-150 w-full text-white'
                                    >
                                        Update Password
                                </Button>
                            </div>
                        ) : (
                            <h1 className='py-28 text-center font-bold text-2xl'>
                                Edit fields to show them here!
                            </h1>
                        )}
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ProfileCredentials;