import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PostCategories = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const categories = [
        'Tips', 'Diet', 'Competitions', 'Powerlifting', 'Bodybuilding', 'Workout Splits'
    ];

    const handleCategoryClick = (category) => {
        searchParams.set('category', category.toLowerCase().replace(" ", ""));
        setSearchParams(searchParams);
    };

    const handleBlur = () => {
        searchParams.delete('category');
        setSearchParams(searchParams);
    };

    return (
        <div className='flex flex-wrap lg:flex-col justify-center items-center px-4 py-6 gap-4 lg:gap-2 dark:bg-neutral-800 bg-gray-200 duration-300 rounded-2xl lg:w-[250px]'>
            <h1 className='hidden lg:block font-bold text-xl mb-2'>Categories</h1>
            {categories.map((category) => (
                <div key={category}>
                    <button
                        onClick={() => handleCategoryClick(category)}
                        onBlur={handleBlur}
                        className='px-3 py-2 focus:bg-purple-700 focus:rounded-md transition duration-300 rounded-md underline underline-offset-[6px] focus:no-underline focus:text-white'
                        aria-label={`Category: ${category}`}
                    >
                        {category}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PostCategories;