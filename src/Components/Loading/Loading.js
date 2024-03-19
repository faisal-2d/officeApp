import React from 'react';

const Loading = () => {
    // <div>
    //     <div className="loading loading-dots loading-lg"></div>
    // </div>
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <button className="btn btn-primary loading">loading</button> 
        </div>
    );
};

export default Loading;