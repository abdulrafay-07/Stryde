import React from 'react';
import { Login as LoginComponent } from '../components/index';

const Login = () => {
    return (
        <div className='h-full flex items-center min-h-screen py-16'>
            <LoginComponent />
        </div>
    )
}

export default Login;