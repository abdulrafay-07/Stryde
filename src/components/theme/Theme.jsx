import React from 'react';
import { toggleTheme } from '../../store/themeSlice';
import { useDispatch } from 'react-redux';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const Theme = () => {
    const dispatch = useDispatch();

    const handleToggleTheme = (theme) => {
        dispatch(toggleTheme(theme));
    }

    return (
        <div className='fixed right-0 top-0 m-5'>
            <div className='flex gap-x-3 lg:gap-x-4 text-xl lg:text-2xl cursor-pointer'>
                <MdOutlineLightMode onClick={() => handleToggleTheme('light')} />
                <MdOutlineDarkMode onClick={() => handleToggleTheme('dark')} />
            </div>
        </div>
    )
}

export default Theme;