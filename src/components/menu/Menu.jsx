import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Categories } from '../index';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className={`fixed top-0 bottom-0 left-0 dark:bg-neutral-800 dark:text-white bg-gray-200 text-neutral-900 duration-300 transform ${menuOpen ? 'w-52' : 'w-16'}`}>
            <div className='m-4 text-2xl h-14 pb-12'>
                <RxHamburgerMenu className='cursor-pointer' 
                    onClick={handleMenuOpen}
                />
            </div>
            <Categories />
        </div>
    )
}

export default Menu;