import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input, Button } from '../index';
import { login as authLogin } from '../../store/authSlice';
import appwriteService from '../../appwrite/config';
import conf from '../../conf/conf';

const Signup = () => {
    const [error, setError] = useState('');
    
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signup = async (data) => {
        setError('');

        try {
            const createAccount = await appwriteService.createAccount(data);

            if (createAccount) {
                const userData = await appwriteService.getCurrentUser();

                if (userData) {
                    dispatch(authLogin(userData));

                    await appwriteService.createUserInformation({userId: userData.$id, profilePicId: conf.appwriteDefaultImageID});
                }
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 h-full flex items-center md:px-48 2xl:px-0 2xl:max-w[1440px] max-w-7xl mx-auto font-primary duration-300'>
            <div className='flex flex-col lg:flex-row lg:justify-between dark:bg-neutral-800 bg-gray-200 p-8 lg:py-12 xl:py-16 md:rounded-2xl gap-4 lg:gap-10 w-full duration-300'>
                <div className='flex flex-col gap-6 lg:w-1/2 lg:px-4'>
                    <h1 className='text-5xl font-bold font-logo text-purple-700'>
                        Stryde
                    </h1>
                    <p className='hidden lg:block'><span className='font-bold'>Stryde</span> empowers you to <span className='font-bold'>train smarter, not harder</span>. Find workouts tailored to your goals, whether you're a seasoned gym-goer or just starting out. Explore a vast exercise library to target specific muscle groups, discover workout splits that fit your schedule (from 2 to 7 days a week), and save your favorites for easy access. <span className='font-bold'>Stryde puts the power of personalized fitness in your hands</span>.</p>
                </div>
                <div className='flex flex-col gap-3 lg:w-1/2 lg:px-4'>
                    <h1 className='text-3xl font-semibold'>Create account</h1>
                    {
                        error && 
                        <p className='text-red-600 mt-8 text-center'>{error}</p>
                    }
                    <form onSubmit={handleSubmit(signup)} className='mt-2'>
                        <div className='space-y-4'>
                            <Input 
                                label='Name'
                                placeholder='Enter your name'
                                {...register('name', {
                                    required: true
                                })}
                            />
                            <Input
                                label='Email'
                                placeholder='Enter your email'
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
                            <Button type='submit'
                                className='w-full lg:w-1/2 bg-purple-700 hover:bg-purple-500 ease-in duration-150 text-white'                            
                            >
                                Create account
                            </Button>
                            <p className='lg:hidden text-center font-bold'>OR</p>
                            <Link to='/login' className='w-full lg:w-1/2 inline-flex justify-center font-semibold text-sm'>
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;