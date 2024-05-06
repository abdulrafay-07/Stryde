import React from 'react';
import { Button } from '../index';
import { useNavigate } from 'react-router-dom';

const UpdateUserPreference = () => {
    const navigate = useNavigate();

    return (
        <div className='fixed right-0 bottom-0 m-4'>
            <Button 
                className='bg-purple-700 hover:bg-purple-500 ease-in duration-150 text-white'
                onClick={() => navigate('/edit-split')}
            >
                change workout split
            </Button>
        </div>
    )
}

export default UpdateUserPreference;