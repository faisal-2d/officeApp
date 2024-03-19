import React from 'react';
import diamond from '../../assets/trophy/gem_green.png'

const JemsRotating = () => {
    return (
        // <div className='my-32 flex justify-center items-center'>
        //     <img className={`w-16 mt-4 animate-spin`} src={diamond}/>
        // </div>
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50'>
                <img className={`w-16 mt-4 animate-spin`} src={diamond}/>
        </div>
    );
};

export default JemsRotating;