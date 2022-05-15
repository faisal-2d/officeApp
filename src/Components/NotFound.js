import React from 'react';
import notFoundImg from '../assets/notFound.png'

const NotFound = () => {
    return (
        <div className='text-center my-20'>            
            <img className="mx-auto" src={notFoundImg} alt="" />
            <p className='text-4xl my-8 text-red-700'>Page Not Found!</p>                      
        </div>
    );
};

export default NotFound;