import React from 'react';
import { Signup as SignupComponent } from '../components/index';

const Signup = () => {
    return (
        <div className='h-full flex items-center min-h-screen py-16'>
            <SignupComponent />
        </div>
    )
}

export default Signup;