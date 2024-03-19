import React from 'react';
import diamond from '../../assets/trophy/gem_red.png'

const jemsBlooping = () => {
     console.log("im blooping");
return (
        // <div className='my-32 flex justify-center items-center'>
        //         <img className={`w-16 mt-4 animate-bounce`} src={diamond}/>
        // </div>
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50'>
                <img className={`w-16 mt-4 animate-bounce`} src={diamond}/>
        </div>
    );
};

export default jemsBlooping;