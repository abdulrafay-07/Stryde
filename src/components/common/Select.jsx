import React, { useId } from 'react';

const Select = ({
    options = [], label, className = '', ...props
}, ref) => {
    const id = useId();

    return (
        <div className='w-full'>
            {label && <label htmlFor={id}></label>}
            <select
                {...props} id={id} ref={ref}
                className={`px-3 py-2 bg-purple-500 border-none text-white focus:bg-purple-800 cursor-pointer rounded-md hover:bg-purple-800  outline-none duration-200 border border-gray-200 ${className}`}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select);