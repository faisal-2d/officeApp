import React from 'react';

const Loading = () => {     

    const colors = ['blue', 'red', 'orange', 'green', '']
    return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className={`loading loading-dots text-or loading-lg text-blue-500`}></div>
    </div>
    );
};

export default Loading;