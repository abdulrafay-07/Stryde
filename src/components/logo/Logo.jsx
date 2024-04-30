import React from 'react';
import Stryde from '../../assets/images/Stryde.png';

const Logo = ({ className = 'w-8' }) => {
    return (
        <div className={`${className}`}>
            <img src={Stryde} alt='Stryde' />
        </div>
    )
}

export default Logo