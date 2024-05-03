import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from '../index';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appwriteService from '../../appwrite/config';

const UserPreference = ({ userPref, setIsUserPrefEmpty }) => {
    const { register, handleSubmit } = useForm();
    
    const userData = useSelector((state) => state.auth.userData);

    const create = async (data) => {
        data.workoutDaysPerWeek = parseInt(data.workoutDaysPerWeek);
        
        if (userData) {
            const preferenceDB = await appwriteService.createUserPreference({...data, userId: userData.$id});
    
            if (preferenceDB) {
                setIsUserPrefEmpty(false);
            } else {
                console.log('User preference data error.');
            }
        }
    }    

    return (
        <form onSubmit={handleSubmit(create)} className='w-1/2 flex justify-center'>
            <div>
                <Input
                    label='How many days do you want to go to the gym?'
                    type='number'
                    placeholder='Min: 2, Max: 6'
                    min='2'
                    max='6'
                    defaultValue='2'
                    {...register('workoutDaysPerWeek', {
                        required: true
                    })}
                />
                <Button type='submit' className='mt-4 w-full bg-purple-700 hover:bg-purple-500 ease-in duration-150 text-white'>
                    {userPref ? 'Update' : 'Submit'}
                </Button>
            </div>
        </form>
    )
}

export default UserPreference;