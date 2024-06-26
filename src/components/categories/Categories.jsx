import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuHome, LuDumbbell, LuSearch } from 'react-icons/lu';
import { MdForum } from 'react-icons/md';

const Categories = ({ menuOpen, handleMenuOpen }) => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (menuOpen) {
            timeoutId = setTimeout(() => {
                setShowText(true);
            }, 200);
        } else {
            setShowText(false);
        }

        return () => clearTimeout(timeoutId);
    }, [menuOpen]);

    const categories = [
        { icon: LuHome, name: 'Home', to: '/' },
        { icon: LuDumbbell, name: 'Browse Regimes', to: '/browse' },
        { icon: LuSearch, name: 'Search Exercises', to: '/search' },
        { icon: MdForum, name: 'Community Posts', to: '/community-posts' }
    ]

    return (
        <div className='flex flex-col gap-5 md:gap-6 lg:gap-7 ml-4 lg:ml-6'>
            {
                categories.map((category, index) => (
                        <div key={index} className={`text-xl 2xl:text-2xl ${menuOpen ? 'flex gap-x-3 items-center' : ''}`}>
                            <Link to={category.to} 
                                onClick={menuOpen ? handleMenuOpen : null}
                            >
                                <category.icon />
                            </Link>
                            {menuOpen && showText && (
                                <Link to={category.to} className='text-sm md:text-base xl:text-xl'
                                    onClick={menuOpen ? handleMenuOpen : null}
                                >
                                    {category.name}
                                </Link>
                            )}
                        </div>
                ))
            }
        </div>
    )
}

export default Categories;