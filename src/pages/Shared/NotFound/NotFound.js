import React from 'react';
import sleeping from '../../../images/sleeping-mechanic.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping!!!!</h2>
            <img src={sleeping} className='w-100' alt="" />
        </div>
    );
};

export default NotFound;