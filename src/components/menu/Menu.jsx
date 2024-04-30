import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Categories } from '../index';
import { IoIosLogOut } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/authSlice';
import appwriteService from '../../appwrite/config';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const isAuthenticated = useSelector(state => state.auth.status);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    const logoutHandler = () => {
        appwriteService.logoutAccount()
            .then(() => {
                navigate('/');
                dispatch(logout());
            })
    }

    return (
        <div className={`fixed top-0 bottom-0 left-0 dark:bg-neutral-800 dark:text-white bg-gray-200 text-neutral-900 duration-300 transform z-50 ${menuOpen ? 'w-48 md:w-52 xl:w-64' : 'w-16 lg:w-20'}`}>
            <div className='m-4 lg:m-5 h-14 pb-12 cursor-pointer text-2xl lg:text-3xl'>
                <RxHamburgerMenu 
                    onClick={handleMenuOpen}
                />
            </div>
            <Categories menuOpen={menuOpen} />
            <div className='fixed bottom-0 left-0 m-4 lg:m-6 cursor-pointer text-2xl'>
                {
                    isAuthenticated && (
                        <IoIosLogOut className='text-purple-500 hover:text-purple-700 ease-in duration-150' onClick={logoutHandler} />
                    )
                }
            </div>
        </div>
    )
}

export default Menu;